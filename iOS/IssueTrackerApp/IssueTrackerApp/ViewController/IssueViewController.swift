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
  
  @IBOutlet weak var issueCollectionView: UICollectionView!
  @IBOutlet weak var filterButton: UIBarButtonItem!
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
    applySnapshot(animatingDifferences: false)
  }
  
  private func configure() {
    configureNavigationBar()
    configureIssueCollectionView()
    configureFliterButton()
  }
  
  private func configureFliterButton() {
    filterButton.target = self
    filterButton.action = #selector(filterButtonTouched)
  }
  
  private func configureNavigationBar() {
    navigationController?.navigationBar.prefersLargeTitles = true
  }
  
  private func configureIssueCollectionView() {
    issueCollectionView.delegate = self
    guard let layout = issueCollectionView.collectionViewLayout as? UICollectionViewFlowLayout else { return }
    layout.sectionHeadersPinToVisibleBounds = true
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: issueCollectionView) { (collectionView, indexPath, issue) -> UICollectionViewCell? in
      guard let cell = collectionView.dequeueReusableCell(
        withReuseIdentifier: "IssueCell",
        for: indexPath
      ) as? IssueCell else {
        return UICollectionViewCell()
      }
      
      cell.updateCell(withTitle: issue.title, description: issue.description)
      return cell
    }
    
    dataSource.supplementaryViewProvider = { collectionView, kind, indexPath in
      guard kind == UICollectionView.elementKindSectionHeader else {
        return nil
      }
      
      let view = collectionView.dequeueReusableSupplementaryView(
        ofKind: kind,
        withReuseIdentifier: "IssueHeader",
        for: indexPath
      ) as? IssueHeader
      
      //      let section = self.dataSource.snapshot()
      //        .sectionIdentifiers[indexPath.section]
      
      return view
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
  
  @objc private func filterButtonTouched() {
    let storyboard = UIStoryboard(name: "IssueFilter", bundle: nil)
    guard let issueFilterVC = storyboard.instantiateInitialViewController() else { return }
    present(issueFilterVC, animated: true, completion: nil)
  }
}

extension IssueViewController: UICollectionViewDelegateFlowLayout {
  
  func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
    guard let _ = dataSource.itemIdentifier(for: indexPath) else {
      return
    }
    
    // TODO:- issue 사용
  }
  
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return CGSize(width: view.bounds.width, height: view.bounds.height / 10)
  }
}


// get : header에 요청을 담아서
