//
//  UpdateIssueViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/10/28.
//

import UIKit

class UpdateIssueViewController: UIViewController {
  
  @IBOutlet weak var navigationBar: UINavigationBar!
  @IBOutlet weak var issueContentTextView: IssueContentTextView!
  
  var pickerView = UIImagePickerController()
  
  override func viewDidLoad() {
    super.viewDidLoad()
    pickerView.delegate = self
    configure()
  }
  
  private func configure() {
    configureNavigationBar()
    registerMenu()
  }
  
  @IBAction func cancelButtonTouched(_ sender: Any) {
    dismiss(animated: true, completion: nil)
  }
  
  @IBAction func submitButtonTouched(_ sender: Any) {
    pickerView.sourceType = .photoLibrary
    present(pickerView, animated: true, completion: nil)
  }
  private func configureNavigationBar() {
    navigationBar.topItem?.title = "새이슈"
  }
  
  private func registerMenu() {
    let menuItem = UIMenuItem(title: "InsertPhoto", action: #selector(IssueContentTextView.openLibrary))
    UIMenuController.shared.menuItems = [menuItem]
  }
}

extension UpdateIssueViewController: UIImagePickerControllerDelegate, UINavigationControllerDelegate {
  func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
    guard let selectedImage = info[.originalImage] as? UIImage else {
      return
    }
    pickerView.dismiss(animated: true, completion: nil)
    
    // TODO:- selectedImage 서버로 POST 해야 함.
  }
}
