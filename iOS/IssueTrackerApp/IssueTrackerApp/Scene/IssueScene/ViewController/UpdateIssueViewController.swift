//
//  UpdateIssueViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/10/28.
//

import UIKit
import MarkdownView

class UpdateIssueViewController: UIViewController {
  
  private var pickerView = UIImagePickerController()
  private var markdownPreview: MarkdownView? {
    willSet {
      guard let markdownPreview = newValue else { return }
      view.addSubview(markdownPreview)
      markdownPreview.translatesAutoresizingMaskIntoConstraints = false
      
      NSLayoutConstraint.activate([
        markdownPreview.topAnchor.constraint(equalTo: issueContentTextView.topAnchor),
        markdownPreview.bottomAnchor.constraint(equalTo: issueContentTextView.bottomAnchor),
        markdownPreview.leadingAnchor.constraint(equalTo: issueContentTextView.leadingAnchor),
        markdownPreview.trailingAnchor.constraint(equalTo: issueContentTextView.trailingAnchor)
      ])
    }
  }

  private var issueTitle: String = ""
  private var issueNumber: Int?
  var handler: (() -> ())?
  
  @IBOutlet weak var navigationBar: UINavigationBar!
  @IBOutlet weak var issueContentTextView: IssueContentTextView!
  @IBOutlet weak var issueTitleTextField: UITextField!
  @IBOutlet weak var markdownSegmentedControl: UISegmentedControl!
  @IBOutlet weak var textViewBottomConstraint: NSLayoutConstraint!
  
  @IBAction func cancelButtonTouched(_ sender: Any) {
    dismiss(animated: true, completion: nil)
  }
  
  @IBAction func submitButtonTouched(_ sender: Any) {
    // TODO:- 이슈 데이터 저장
    guard let titleTextField = issueTitleTextField.text else { return }
    let apiService = APIService()
    let dummyIssueId = UserDefaults.standard.integer(forKey: "issueId")
    let comment: Comment
    var issue = Issue(id: dummyIssueId, userSid: 0, issueTitle: titleTextField, issueAuthor: "", comment: [], label: [], milestone: nil, issueStatus: true, assignee: [])
    if issueContentTextView.text != nil && issueContentTextView.text != "" {
      let dateFormatter = DateFormatter()
      dateFormatter.dateFormat = "yyyy-MM-dd"
      let dateAsString = dateFormatter.string(from: Date())
      if let text = issueContentTextView.text {
        comment = Comment(writerId: 0, description: text, createAt: dateAsString)
        var commentArray: [Comment] = []
        commentArray.append(comment)
        issue = Issue(id: dummyIssueId, userSid: 0, issueTitle: titleTextField, issueAuthor: "", comment: commentArray, label: [], milestone: nil, issueStatus: true, assignee: [])
      }
    }
    let endPoint = IssueEndPoint.postIssue(issue: issue).endPoint
    apiService.requestIssue(forEndPoint: endPoint) { [weak self] (data, res, error) in
      guard let self = self else { return }
      self.dismiss(animated: true) { [weak self] in
        self?.handler?()
      }
    }
  }
  
  init?(coder: NSCoder, issueTitle: String = "", issueNumber: Int? = nil) {
    self.issueTitle = issueTitle
    self.issueNumber = issueNumber
    super.init(coder: coder)
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    pickerView.delegate = self
    configure()
  }
  
  override func viewWillAppear(_ animated: Bool) {
    registerForKeyboardNotifications()
  }
  
  override func viewWillDisappear(_ animated: Bool) {
    unregisterForKeyboardNotifications()
  }
  
  override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    self.view.endEditing(true)
  }
  
  private func configure() {
    configureNavigationBar()
    registerMenu()
    configureMarkdownSegmentedControl()
    configureIssueContentTextView()
  }
  
  private func configureNavigationBar() {
    if let number = issueNumber {
      navigationBar.topItem?.title = "# " + String(number)
      issueTitleTextField.text = issueTitle
    } else {
      navigationBar.topItem?.title = "새이슈"
    }
  }
  
  private func configureMarkdownSegmentedControl() {
    markdownSegmentedControl.addTarget(self,
                                       action: #selector(segmentedControlIndexChanged(_:)),
                                       for: .valueChanged)
  }
  
  private func configureIssueContentTextView() {
    issueContentTextView.openLibraryHandler = { [weak self] in
      guard let self = self else { return }
      self.pickerView.sourceType = .photoLibrary
      self.present(self.pickerView, animated: true, completion: nil)
    }
  }
  
  private func registerForKeyboardNotifications() {
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillShow), name: UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillHide), name: UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  private func unregisterForKeyboardNotifications() {
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  private func registerMenu() {
    let menuItem = UIMenuItem(title: "InsertPhoto", action: #selector(IssueContentTextView.openLibrary))
    UIMenuController.shared.menuItems = [menuItem]
  }
  
  private func showMarkdownPreview() {
    markdownPreview = MarkdownView()
    guard let markdownPreview = markdownPreview,
            let text = issueContentTextView.text else { return }
    markdownPreview.load(markdown: text)
  }
  
  // MARK:- obj-c Method
  @objc private func segmentedControlIndexChanged(_ sender: UISegmentedControl) {
    switch sender.selectedSegmentIndex {
    case 0:
      markdownPreview?.removeFromSuperview()
      markdownPreview = nil
      issueContentTextView.isHidden = false
    case 1:
      self.view.endEditing(true)
      issueContentTextView.isHidden = true
      showMarkdownPreview()
    default:
      break
    }
  }
  
  @objc func keyboardWillShow(note: NSNotification) {
    if let keyboardSize = (note.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue)?.cgRectValue {
      UIView.animate(withDuration: 0.3, animations: {
        self.textViewBottomConstraint.constant = keyboardSize.height - CGFloat(20)
      })
    }
  }
  
  @objc func keyboardWillHide(note: NSNotification) {
    UIView.animate(withDuration: 0.3, animations: {
      self.textViewBottomConstraint.constant = 0
    })
  }
}

extension UpdateIssueViewController: UIImagePickerControllerDelegate, UINavigationControllerDelegate {
  func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
    guard let _ = info[.originalImage] as? UIImage else {
      return
    }
    pickerView.dismiss(animated: true, completion: nil)
    
    // TODO:- selectedImage 서버로 POST 해야 함.
  }
}
