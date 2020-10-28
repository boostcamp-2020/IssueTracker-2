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
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
    applySnapshot(animatingDifferences: false)
  }
  
  private func configure() {
    configureNavigationBar()
    configureIssueCollectionView()
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
}

extension IssueViewController: UICollectionViewDelegateFlowLayout {
  
  func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
    guard let issue = dataSource.itemIdentifier(for: indexPath) else {
      return
    }
    
    // TODO:- issue 사용
  }
  
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return CGSize(width: view.bounds.width, height: view.bounds.height / 10)
  }
}
