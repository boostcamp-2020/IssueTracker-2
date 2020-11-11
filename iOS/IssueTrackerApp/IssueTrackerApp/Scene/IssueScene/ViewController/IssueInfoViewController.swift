//
//  IssueInfoViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/11.
//

import UIKit

class IssueInfoViewController: UIViewController {
  
  @IBOutlet weak var issueInfoCollectionView: UICollectionView!
  
  typealias DataSource = UICollectionViewDiffableDataSource<IssueInfoSection, Issue>
  typealias Snapshot = NSDiffableDataSourceSnapshot<IssueInfoSection, Issue>
  
  private lazy var dataSource = makeDataSource()
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
  }
  
  private func makeDataSource() {
    let dataSource = DataSource(collectionView: issueInfoCollectionView) { (collectionView, indexPath, item) -> UICollectionViewCell? in
      
      if indexPath == IndexPath(row: Int(), section: 0) {
        let cell: UserCell
      }
      return dataSource
    }
  }
  
  private func configure() {
    self.view.layer.cornerRadius = 20
  }
}
