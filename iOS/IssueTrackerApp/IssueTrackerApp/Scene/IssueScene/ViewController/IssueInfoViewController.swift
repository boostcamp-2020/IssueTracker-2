//
//  IssueInfoViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/11.
//

import UIKit

class IssueInfoViewController: UIViewController {
  
  @IBOutlet weak var issueInfoCollectionView: UICollectionView!

  var dummyData = DummyList()
  var issue: Issue
  
  override func viewDidLoad() {
    super.viewDidLoad()
    issueInfoCollectionView.delegate = self
    issueInfoCollectionView.dataSource = self
    issueInfoCollectionView.reloadData()
    configure()
  }
  
  init?(coder: NSCoder, issue: Issue) {
    self.issue = issue
    super.init(coder: coder)
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func configure() {
    self.view.layer.cornerRadius = 20
  }
}

extension IssueInfoViewController: UICollectionViewDelegate, UICollectionViewDataSource {
  func collectionView(_ collectionView: UICollectionView, numberOfItemsInSection section: Int) -> Int {
    switch section {
    case 0:
      return issue.assignee?.count ?? 0
    case 1:
      return issue.label?.count ?? 0
    case 2:
      return 1
    default:
      return 0
    }
  }
  
  func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    let section = indexPath.section
    switch section {
    case 0:
      let cell: UserCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      guard let assignee = issue.assignee else { return UICollectionViewCell() }
      cell.updateCell(withUser: assignee[indexPath.row])
    case 1:
      let cell: IssueCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      guard let label = issue.label else { return UICollectionViewCell() }
    default:
      break
    }
  }
}
