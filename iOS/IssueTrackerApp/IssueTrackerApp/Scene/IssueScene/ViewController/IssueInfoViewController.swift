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
  var issue: Issue {
    willSet {
      guard let issueDetailVC = self.parent as? IssueDetailViewController else { return }
      issueDetailVC.issue = newValue
    }
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
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
    configureIssueInfoCollectionView()
  }
  
  private func configureIssueInfoCollectionView() {
    issueInfoCollectionView.collectionViewLayout = LeftAlignedCollectionViewFlowLayout()
    issueInfoCollectionView.register(UserCell.self)
    issueInfoCollectionView.register(InnerLabelCell.self)
    issueInfoCollectionView.register(IssueInfoMileStoneCell.self)
    
    issueInfoCollectionView.delegate = self
    issueInfoCollectionView.dataSource = self
  }
  
  private func reloadData() {
    DispatchQueue.main.async { [weak self] in
      self?.issueInfoCollectionView.reloadData()
    }
  }
  
  @IBAction func closeButtonTouched(_ sender: Any) {
    navigationController?.popViewController(animated: true)
  }
  
  @IBAction func addCommentButtonTouched(_ sender: Any) {
    let storyboard = UIStoryboard(name: "Comment", bundle: nil)
    guard let commentVC = storyboard.instantiateViewController(withIdentifier: "CommentViewController") as? CommentViewController else { return }
    commentVC.delegate = self
    present(commentVC, animated: true, completion: nil)
  }
  
}

extension IssueInfoViewController: UICollectionViewDelegate, UICollectionViewDataSource, UICollectionViewDelegateFlowLayout {
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
  
  func numberOfSections(in collectionView: UICollectionView) -> Int {
    return 3
  }
  
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, insetForSectionAt section: Int) -> UIEdgeInsets {
    return UIEdgeInsets(top: 0, left: 0, bottom: 50, right: 0)
  }
  
  func collectionView(_ collectionView: UICollectionView, viewForSupplementaryElementOfKind kind: String, at indexPath: IndexPath) -> UICollectionReusableView {
    guard let headerView = collectionView.dequeueReusableSupplementaryView(ofKind: kind, withReuseIdentifier: "IssueInfoHeader", for: indexPath) as? IssueInfoHeader else { return UICollectionReusableView() }
    
    switch indexPath.section {
    case 0:
      headerView.headerLabel.text = "담당자"
    case 1:
      headerView.headerLabel.text = "레이블"
    case 2:
      headerView.headerLabel.text = "마일스톤"
    default:
      break
    }
    
    return headerView
  }
  
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    let section = indexPath.section
    switch section {
    case 0:
      return CGSize(width: 80, height: 95)
    case 1:
      guard let label = issue.label else { return CGSize() }
      let dummyLabel = UILabel(frame: CGRect.zero)
      dummyLabel.text = " \(label[indexPath.row].labelName) "
      dummyLabel.sizeToFit()
      return dummyLabel.bounds.size
    case 2:
      return CGSize(width: collectionView.bounds.width, height: 50)
    default:
      break
    }
    return CGSize()
  }
  
  func collectionView(_ collectionView: UICollectionView, cellForItemAt indexPath: IndexPath) -> UICollectionViewCell {
    let section = indexPath.section
    switch section {
    case 0:
      let cell: UserCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      guard let assignee = issue.assignee else { return UICollectionViewCell() }
      cell.updateCell(withUser: dummyData.getUser(withID: assignee[indexPath.row])!)
      return cell
    case 1:
      let cell: InnerLabelCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      guard let label = issue.label else { return UICollectionViewCell() }
      cell.updateCell(withLabel: label[indexPath.row])
      return cell
    case 2:
      let cell: IssueInfoMileStoneCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      guard let milestone = issue.milestone else { return UICollectionViewCell() }
      cell.updateCell(withMilestone: milestone)
      return cell
    default:
      break
    }
    return UICollectionViewCell()
  }
}


extension IssueInfoViewController: CommentDelegate {
  func submit(text: String) {
    issue.comment!.append(Comment(writerId: 3, description: text, createAt: "2020-11-13"))
  }
}
