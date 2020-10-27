//
//  ViewController.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/26.
//

import UIKit

enum Section {
  case main
}

class IssueViewController: UIViewController {
  
  typealias DataSource = UICollectionViewDiffableDataSource<Section, Issue>
  typealias Snapshot = NSDiffableDataSourceSnapshot<Section, Issue>
  
  private lazy var dataSource = makeDataSource()
  
  @IBOutlet weak var issueCollectionView: UICollectionView!
  override func viewDidLoad() {
    super.viewDidLoad()
    configureNavigationBar()
    applySnapshot(animatingDifferences: false)
    issueCollectionView.delegate = self
    
  }
  
  private func configureNavigationBar() {
    navigationController?.navigationBar.prefersLargeTitles = true
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: issueCollectionView) { (collectionView, indexPath, issue) -> UICollectionViewCell? in
      guard let cell = collectionView.dequeueReusableCell(withReuseIdentifier: "IssueCell", for: indexPath) as? IssueCell else { return UICollectionViewCell() }
      
      cell.updateCell(withTitle: issue.title,
                      description: issue.description)
      
      return cell
    }
    return dataSource
  }
  
  private func applySnapshot(animatingDifferences: Bool = true) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    let issues = [Issue(title: "레이블 목록보기 구현", description: "레이블 전체 목록을 볼 수 있어야 한다 2줄까지 보입니다."),
                  Issue(title: "마일스톤 목록 보기 구현", description: "마일스톤 목록 보기 구현")]
    let issueList = IssueList(issues: issues)
    snapshot.appendItems(issueList.issues)
    dataSource.apply(snapshot, animatingDifferences: animatingDifferences)
  }
}

extension IssueViewController: UICollectionViewDelegate {
  func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
    guard let issue = dataSource.itemIdentifier(for: indexPath) else {
      return
    }
    
    // TODO:- issue 사용
  }
}

extension IssueViewController: UICollectionViewDelegateFlowLayout {
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return CGSize(width: view.bounds.width, height: view.bounds.height / 10)
  }
}
