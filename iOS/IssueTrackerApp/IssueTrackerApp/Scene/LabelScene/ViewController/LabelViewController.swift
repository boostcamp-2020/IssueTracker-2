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
  
  override func viewDidLoad() {
    super.viewDidLoad()
    applySnapshot(animatingDifferences: false)
    labelCollectionView.delegate = self
    configureNavigator()
    labelCollectionView.register(LabelCell.self)
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
  
  private func applySnapshot(animatingDifferences: Bool = true) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    let labels = LabelList.dummyLabels
    let labelList = LabelList(labels: labels)
    snapshot.appendItems(labelList.labels)
    dataSource.apply(snapshot, animatingDifferences: animatingDifferences)
  }
  
  private func dismissUpdateLabelView() {
    blurView.isHidden.toggle()
    view.subviews.last?.removeFromSuperview()
  }
  
  @objc func addButtonTapped() {
    if let nib = Bundle.main.loadNibNamed("UpdateLabelView", owner: self),
       let nibView = nib.first as? UpdateLabelView {
      self.view.addSubview(nibView)
      
      nibView.translatesAutoresizingMaskIntoConstraints = false
      NSLayoutConstraint.activate([
        nibView.heightAnchor.constraint(equalToConstant: 384),
        nibView.widthAnchor.constraint(equalToConstant: 350),
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
        updateLabelView.transform = CGAffineTransform(translationX: 0, y: -keyboardSize.height + 230)
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
    dismissUpdateLabelView()
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
  
  func saveButtonTouched(_ sender: UIButton) {
    dismissUpdateLabelView()
  }
}
