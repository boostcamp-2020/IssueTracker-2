//
//  IssueDetailViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/10.
//

import UIKit

class IssueDetailViewController: UIViewController {
  
  typealias DataSource = UICollectionViewDiffableDataSource<CommentSection, Comment>
  typealias Snapshot = NSDiffableDataSourceSnapshot<CommentSection, Comment>
  
  private lazy var dataSource = makeDataSource()
  var issue: Issue
  
  @IBOutlet weak var issueDetailCollectionView: UICollectionView!
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
    issueDetailCollectionView.delegate = self
    navigationItem.largeTitleDisplayMode = .never
    applySnapshot(animatingDifferences: true)
    addBottomSheetViewController()
  }
  
  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    applySnapshot()
  }
  
  private func configure() {
    configureNavigator()
    issueDetailCollectionView.register(IssueDetailCell.self)
    issueDetailCollectionView.registerHeader(IssueDetailHeader.self)
  }
  
  private func configureNavigator() {
    self.navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .edit, target: self, action: #selector(editButtonTouched))
  }
  
  init?(coder: NSCoder, issue: Issue) {
    self.issue = issue
    super.init(coder: coder)
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: issueDetailCollectionView) { (collectionView, indexPath, item) -> UICollectionViewCell? in
      let cell: IssueDetailCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      cell.updateCell(withItem: item)
      return cell
    }
    
    dataSource.supplementaryViewProvider = { (collectionView, kind, indexPath) in
      let sectionHeader = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: "IssueDetailHeader", for: indexPath) as? IssueDetailHeader
      
      sectionHeader?.updateHeader(withItem: self.issue)
      return sectionHeader
    }
    return dataSource
  }
  
  private func applySnapshot(animatingDifferences: Bool = true) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    let comments = [
      Comment(id: 0, writerId: 0, description: "과연 나올까??????", createAt: "2020-11-09"),
      Comment(id: 1, writerId: 1, description:
                """
                안나올거같은데???????ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
                ㅁㅁㅁㅁㅁㅁㅁㅁㄹ디지ㅏㅁ로지ㅏ러지Kflajf;lw jc;ilwef;o.
                efj;iowejFlkwefjkwbfkhwe.fkhwekfhwkfhwljl.
                wjkflsdflwkehf,eknf
                """, createAt: "2020-11-08"),
      Comment(id: 2, writerId: 2, description: "가나다라마바사", createAt: "2020-01-11")
    ]
    snapshot.appendItems(comments, toSection: .main)
    UIView.animate(withDuration: 0.5) {
      self.dataSource.apply(snapshot, animatingDifferences: animatingDifferences)
    }
  }
  
  private func addBottomSheetViewController() {
    let storyboard = UIStoryboard.init(name: "IssueInfo", bundle: nil)
    guard let issueInfoVC = storyboard.instantiateViewController(withIdentifier: "IssueInfoViewController") as? IssueInfoViewController else { return }
    self.addChild(issueInfoVC)
    self.view.addSubview(issueInfoVC.view)
    issueInfoVC.didMove(toParent: self)
    
    issueInfoVC.view.translatesAutoresizingMaskIntoConstraints = false
    issueInfoVC.view.trailingAnchor.constraint(equalTo: self.view.trailingAnchor).isActive = true
    issueInfoVC.view.leadingAnchor.constraint(equalTo: self.view.leadingAnchor).isActive = true
    issueInfoVC.view.topAnchor.constraint(equalTo: self.view.bottomAnchor, constant: -500).isActive = true
    issueInfoVC.view.heightAnchor.constraint(equalTo: self.view.heightAnchor).isActive = true
  }
  
  @objc func editButtonTouched() {
    
    let storyboard = UIStoryboard(name: "Issue", bundle: nil)
    let newIssueVC = storyboard.instantiateViewController(identifier: "NewIssueVC", creator: { (coder) -> UpdateIssueViewController? in
      return UpdateIssueViewController(coder: coder, issueTitle: self.issue.issueTitle, issueNumber: self.issue.id)
    })
    present(newIssueVC, animated: true)
  }
}

extension IssueDetailViewController: UICollectionViewDelegateFlowLayout {
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    guard let item = dataSource.itemIdentifier(for: indexPath) else { return CGSize(width: 10, height: 10) }
    let dummyTextView = UITextView(frame: CGRect(x: 0, y: 0, width: view.bounds.width, height: 800))
    dummyTextView.text = item.description
    dummyTextView.sizeToFit()
    
    return CGSize(width: view.bounds.width, height: dummyTextView.frame.height + 100)
  }
}
