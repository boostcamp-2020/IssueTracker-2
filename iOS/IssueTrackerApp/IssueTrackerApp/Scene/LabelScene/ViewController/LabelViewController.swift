//
//  LabelViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/07.
//

import UIKit

class LabelViewController: UIViewController {
  
  typealias DataSource = UICollectionViewDiffableDataSource<LabelSection, Label>
  typealias Snapshot = NSDiffableDataSourceSnapshot<LabelSection, Label>
  
  private lazy var dataSource = makeDataSource()
  
  @IBOutlet weak var labelCollectionView: UICollectionView!
  @IBOutlet weak var blurView: UIVisualEffectView!
  
  lazy var addButton: UIBarButtonItem = {
    let button = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(self.addButtonTapped))
    return button
  }()
  
  private var labelData: [Label] = [] {
    willSet {
      DispatchQueue.main.async { [weak self] in
        self?.applySnapshot(withItem: newValue)
      }
    }
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    labelCollectionView.delegate = self
    configureNavigator()
    labelCollectionView.register(LabelCell.self)
    loadLabelData()
  }
  
  override func viewWillAppear(_ animated: Bool) {
    registerForKeyboardNotifications()
  }
  
  override func viewWillDisappear(_ animated: Bool) {
    unregisterForKeyboardNotifications()
  }
  
  private func configureNavigator() {
    self.navigationItem.rightBarButtonItem = self.addButton
    guard let navigationController = navigationController else { return }
    navigationController.navigationBar.prefersLargeTitles = true
    navigationController.navigationBar.topItem?.title = "레이블"
  }
  
  func registerForKeyboardNotifications() {
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillShow), name: UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillHide), name: UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  func unregisterForKeyboardNotifications() {
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: labelCollectionView) { (collectionView, indexPath, item) -> UICollectionViewCell? in
      let cell: LabelCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      cell.updateCell(withTitle: item.labelName, description: item.labelDescription ?? "", colorAsHex: item.color)
      return cell
    }
    return dataSource
  }
  
  private func applySnapshot(withItem items: [Label], animatingDifferences: Bool = true) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    snapshot.appendItems(items)
    dataSource.apply(snapshot, animatingDifferences: animatingDifferences)
  }
  
  private func dismissUpdateLabelView() {
    DispatchQueue.main.async { [weak self] in
      self?.blurView.isHidden.toggle()
      self?.view.subviews.last?.removeFromSuperview()
    }
  }
  
  private func loadLabelData() {
    let apiService = APIService()
    let endPoint = LabelEndPoint.getLabels.endPoint
    apiService.requestLabel(forEndPoint: endPoint) { [weak self] (data, response, error) in
      let decoder = JSONDecoder()
      decoder.keyDecodingStrategy = .convertFromSnakeCase
      guard let data = data else { return }
      guard let result = try? decoder.decode(LabelResponse.self, from: data) else { return }
      self?.labelData = result.labels
    }
  }
  
  @objc func addButtonTapped() {
    addButton.isEnabled = false
    if let nib = Bundle.main.loadNibNamed("UpdateLabelView", owner: self),
       let nibView = nib.first as? UpdateLabelView {
      self.view.addSubview(nibView)
      
      nibView.translatesAutoresizingMaskIntoConstraints = false
      NSLayoutConstraint.activate([
        nibView.heightAnchor.constraint(equalToConstant: 310),
        nibView.widthAnchor.constraint(equalTo: view.widthAnchor, multiplier: 0.85),
        nibView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
        nibView.centerYAnchor.constraint(equalTo: view.centerYAnchor)
      ])
      nibView.delegate = self
    }
    
    blurView.effect = UIBlurEffect(style: .dark)
    blurView.frame = self.view.bounds
    self.blurView.isHidden.toggle()
  }
  
  @objc func keyboardWillShow(note: NSNotification) {
    if let keyboardSize = (note.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue)?.cgRectValue,
       let updateLabelView = view.subviews.last as? UpdateLabelView {
      UIView.animate(withDuration: 0.3, animations: {
        updateLabelView.transform = CGAffineTransform(translationX: 0, y: -keyboardSize.height / 3)
      })
    }
  }
  
  @objc func keyboardWillHide(note: NSNotification) {
    if let updateLabelView = view.subviews.last as? UpdateLabelView {
      UIView.animate(withDuration: 0.3, animations: {
        updateLabelView.transform = .identity
      })
    }
  }
}

extension LabelViewController: UICollectionViewDelegateFlowLayout {
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return CGSize(width: view.bounds.width, height: 80)
  }
}

extension LabelViewController: UpdateLabelViewDelegate {
  func closeButtonTouched(_ sender: UIButton) {
    AlertFactory.shared.makeActionSheet(viewControllerToPresent: self) { [weak self] in
      self?.dismissUpdateLabelView()
      self?.addButton.isEnabled = true
    }
  }
  
  func resetButtonTouched(_ sender: UIButton, title: UITextField, description: UITextField) {
    title.text = ""
    description.text = ""
  }
  
  func colorRefreshButtonTouched(_ sender: UIButton, colorLabel: UILabel, colorPreview: UIView) {
    let randomColor = UIColor.random
    colorLabel.text = randomColor.toHexString()
    colorPreview.backgroundColor = randomColor
  }
  
  func saveButtonTouched(title: String, description: String?, colorAsHex: String) {
    let apiService = APIService()
    let label = Label(labelName: title, color: colorAsHex, labelDescription: description)
    let endPoint = LabelEndPoint.postLabel(label: label).endPoint
    apiService.requestLabel(forEndPoint: endPoint) { [weak self] (data, res, error) in
      guard let res = res as? HTTPURLResponse else { return }
      self?.loadLabelData()
      self?.addButton.isEnabled = true
      self?.dismissUpdateLabelView()
    }
  }
}
