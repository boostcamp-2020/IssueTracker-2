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
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
    applySnapshot(animatingDifferences: false)
    issueSearchBar.delegate = self
  }
  
  private func configure() {
    configureNavigationBar()
    configureIssueCollectionView()
    configureNavigationBarButton()
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
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: issueCollectionView) { (collectionView, indexPath, issue) -> UICollectionViewCell? in
      guard let cell = collectionView.dequeueReusableCell(
        withReuseIdentifier: "IssueCell",
        for: indexPath
      ) as? IssueCell else {
        return UICollectionViewCell()
      }
      
      cell.updateCell(withTitle: issue.issueTitle)
      return cell
    }
    
    return dataSource
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
    // guard let issueFilterVC = storyboard.instantiateInitialViewController() as? IssueFilterViewController else { return }
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
      
      cell.editCell(status: isEdited)
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
}

extension IssueViewController: UICollectionViewDelegateFlowLayout {
  
  func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
    guard let _ = dataSource.itemIdentifier(for: indexPath) else {
      return
    }
    
    // TODO:- issue 사용
  }
  
  func collectionView(_ collectionView: UICollectionView, willDisplay cell: UICollectionViewCell, forItemAt indexPath: IndexPath) {
    guard let cell = cell as? IssueCell else { return }
    cell.editCell(status: isEdited)
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
