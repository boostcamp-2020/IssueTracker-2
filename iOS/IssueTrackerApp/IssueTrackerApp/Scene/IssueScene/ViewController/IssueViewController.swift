//
//  ViewController.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/26.
//

import UIKit

class IssueViewController: UIViewController {
  
  typealias DataSource = UICollectionViewDiffableDataSource<IssueSection, Issue>
  typealias Snapshot = NSDiffableDataSourceSnapshot<IssueSection, Issue>
  
  private lazy var dataSource = makeDataSource()
  private var isEdited: Bool = false {
    didSet {
      isEdited == true ? editMode() : normalMode()
    }
  }
  
  @IBOutlet weak var issueCollectionView: UICollectionView!
  @IBOutlet weak var filterButton: UIBarButtonItem!
  @IBOutlet weak var editButton: UIBarButtonItem!
  @IBOutlet weak var issueSearchBar: UISearchBar!
  @IBOutlet weak var collectionViewBottomConstraint: NSLayoutConstraint!
  
  @IBAction func newIssueButtonTouched(_ sender: Any) {
    guard let newIssueVC = storyboard?.instantiateViewController(identifier: "NewIssueVC") else { return }
    present(newIssueVC, animated: true)
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
    applySnapshot(animatingDifferences: false)
    issueSearchBar.delegate = self
  }
  
  override func viewWillAppear(_ animated: Bool) {
    registerForKeyboardNotifications()
  }
  
  override func viewWillDisappear(_ animated: Bool) {
    unregisterForKeyboardNotifications()
  }
  
  private func configure() {
    configureNavigationBar()
    configureIssueCollectionView()
    configureNavigationBarButton()
  }
  
  func registerForKeyboardNotifications() {
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillShow), name: UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillHide), name: UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  func unregisterForKeyboardNotifications() {
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  private func configureNavigationBarButton() {
    filterButton.target = self
    filterButton.action = #selector(filterButtonTouched)
    editButton.target = self
    editButton.action = #selector(editButtonTouched)
  }
  
  private func configureNavigationBar() {
    navigationController?.navigationBar.prefersLargeTitles = true
  }
  
  private func configureIssueCollectionView() {
    issueCollectionView.delegate = self
    issueCollectionView.allowsMultipleSelection = true
    issueCollectionView.register(IssueCell.self)
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: issueCollectionView) { (collectionView, indexPath, item) -> UICollectionViewCell? in
      let cell: IssueCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      
      let leftGesture = UISwipeGestureRecognizer(target: self, action: #selector(self.swipeLeft(_:)))
      let rightGesture = UISwipeGestureRecognizer(target: self, action: #selector(self.swipeRight(_:)))
      
      leftGesture.direction = .left
      rightGesture.direction = .right
      
      cell.gestureRecognizers = [leftGesture, rightGesture]
      
      cell.updateCell(withItem: item)
      
      return cell
    }
    
    return dataSource
  }
  
  @objc func swipeLeft(_ sender: UISwipeGestureRecognizer) {
    if isEdited { return }
    guard let view = sender.view as? IssueCell else { return }
    UIView.animate(withDuration: 0.5) {
      view.bigView.transform = CGAffineTransform(translationX: -160, y: 0)
      view.closeLabel.transform = CGAffineTransform(translationX: -80, y: 0)
    }
  }
  
  @objc func swipeRight(_ sender: UISwipeGestureRecognizer) {
    if isEdited { return }
    guard let view = sender.view as? IssueCell else { return }
    UIView.animate(withDuration: 0.5) {
      view.bigView.transform = .identity
      view.closeLabel.transform = .identity
    }
  }
  
  private func applySnapshot(animatingDifferences: Bool = true) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    let issues = IssueList.dummyIssues
    let issueList = IssueList(issues: issues)
    snapshot.appendItems(issueList.issues)
    dataSource.apply(snapshot, animatingDifferences: animatingDifferences)
  }
  
  private func removeIssue(_ data: Issue, animated: Bool) {
    var snapshot = dataSource.snapshot()
    snapshot.deleteItems([data])
    dataSource.apply(snapshot, animatingDifferences: animated)
  }
  
  private func editMode() {
    filterButton.title = "Select All"
    filterButton.action = #selector(selectAllButtonTouched)
    editButton.title = "Cancel"
  }
  
  private func normalMode() {
    filterButton.title = "Filter"
    filterButton.action = #selector(filterButtonTouched)
    editButton.title = "Edit"
  }
  
  @objc private func filterButtonTouched() {
    let storyboard = UIStoryboard(name: "IssueFilter", bundle: nil)
    let issueFilterVC = storyboard.instantiateViewController(identifier: "IssueFilterViewController", creator: { (coder) -> IssueFilterViewController? in
      return IssueFilterViewController(coder: coder, tableViewDelegate: FilterTableViewDelegate())
    })
    present(issueFilterVC, animated: true, completion: nil)
  }
  
  @objc private func editButtonTouched() {
    isEdited.toggle()
    issueCollectionView.deselectAll(animated: true)
    
    let visibleItemIndexPaths = issueCollectionView.indexPathsForVisibleItems
    
    for indexPath in visibleItemIndexPaths {
      guard let cell = issueCollectionView.cellForItem(at: indexPath) as? IssueCell else { return }
      
      cell.editCurrentCell(status: isEdited)
    }
  }
  
  @objc private func selectAllButtonTouched() {
    issueCollectionView.selectAll(animated: true)
    filterButton.title = "Deselect All"
    filterButton.action = #selector(deselectAllButtonTouched)
  }
  
  @objc private func deselectAllButtonTouched() {
    issueCollectionView.deselectAll(animated: true)
    filterButton.title = "Select All"
    filterButton.action = #selector(selectAllButtonTouched)
  }
  
  @objc func keyboardWillShow(note: NSNotification) {
    if let keyboardSize = (note.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue)?.cgRectValue {
      UIView.animate(withDuration: 0.3, animations: {
        self.collectionViewBottomConstraint.constant = keyboardSize.height - CGFloat(80)
      })
    }
  }
  
  @objc func keyboardWillHide(note: NSNotification) {
    UIView.animate(withDuration: 0.3, animations: {
      self.collectionViewBottomConstraint.constant = 0
    })
  }
}

extension IssueViewController: UICollectionViewDelegateFlowLayout {
  
  func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
    let storyboard = UIStoryboard(name: "IssueDetail", bundle: nil)
    guard let issue = dataSource.itemIdentifier(for: indexPath) else { return }
    let issueDetailVC = storyboard.instantiateViewController(identifier: "IssueDetailViewController", creator: { (coder) -> IssueDetailViewController? in
      return IssueDetailViewController(coder: coder, issue: issue)
    })
    navigationController?.pushViewController(issueDetailVC, animated: true)
  }
  
  func collectionView(_ collectionView: UICollectionView, willDisplay cell: UICollectionViewCell, forItemAt indexPath: IndexPath) {
    guard let cell = cell as? IssueCell else { return }
    cell.editHiddenCell(status: isEdited)
  }
  
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return CGSize(width: view.bounds.width, height: 80)
  }
}

extension UICollectionView {
  func selectAll(animated: Bool) {
    (0..<numberOfSections).compactMap { (section) -> [IndexPath]? in
      return (0..<numberOfItems(inSection: section)).compactMap({ (item) -> IndexPath? in
        return IndexPath(item: item, section: section)
      })
    }.flatMap { $0 }.forEach { (indexPath) in
      selectItem(at: indexPath, animated: true, scrollPosition: [])
    }
  }
  
  func deselectAll(animated: Bool) {
    indexPathsForSelectedItems?.forEach({ (indexPath) in
      deselectItem(at: indexPath, animated: animated)
    })
  }
}

extension IssueViewController: UISearchBarDelegate {
  func searchBarTextDidBeginEditing(_ searchBar: UISearchBar) {
    searchBar.showsCancelButton = true
  }
  func searchBarCancelButtonClicked(_ searchBar: UISearchBar) {
    searchBar.text = nil
    searchBar.showsCancelButton = false
    searchBar.endEditing(true)
  }
}
