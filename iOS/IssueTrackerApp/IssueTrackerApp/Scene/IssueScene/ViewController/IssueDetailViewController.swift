//
//  IssueDetailViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/10.
//

import UIKit

class IssueDetailViewController: UIViewController, UIGestureRecognizerDelegate {
  
  typealias DataSource = UICollectionViewDiffableDataSource<CommentSection, Comment>
  typealias Snapshot = NSDiffableDataSourceSnapshot<CommentSection, Comment>
  
  private lazy var dataSource = makeDataSource()
  var issue: Issue
  
  @IBOutlet weak var issueDetailCollectionView: UICollectionView!
  
  var startingOffset: CGFloat = 0
  let topPadding: CGFloat = 64
  var heightConstraint: NSLayoutConstraint?
  lazy var maxOffset = (view.frame.height * 0.7) - topPadding
  
  lazy var panGesture: UIPanGestureRecognizer = {
      let gesture = UIPanGestureRecognizer()
      gesture.delegate = self
      return gesture
  }()
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
    issueDetailCollectionView.delegate = self
    navigationItem.largeTitleDisplayMode = .never
    applySnapshot(animatingDifferences: true)
    addBottomSheetViewController()
    panGesture.addTarget(self, action: #selector(panGesture(recognizer:)))
    view.subviews.last?.addGestureRecognizer(panGesture)
  }
  
  override func viewDidAppear(_ animated: Bool) {
    super.viewDidAppear(animated)
    applySnapshot()
  }
  
  override func viewWillDisappear(_ animated: Bool) {
    super.viewWillDisappear(animated)
    tabBarController?.tabBar.isHidden = false
  }
  
  private func configure() {
    configureNavigator()
    tabBarController?.tabBar.isHidden = true
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
    let issueInfoVC = storyboard.instantiateViewController(identifier: "IssueInfoViewController", creator: { (coder) -> IssueInfoViewController? in
      return IssueInfoViewController(coder: coder, issue: self.issue)
    })
    
    self.addChild(issueInfoVC)
    self.view.addSubview(issueInfoVC.view)
    issueInfoVC.didMove(toParent: self)
    
    issueInfoVC.view.translatesAutoresizingMaskIntoConstraints = false
    issueInfoVC.view.leadingAnchor.constraint(equalTo: view.leadingAnchor, constant: 0).isActive = true
    issueInfoVC.view.trailingAnchor.constraint(equalTo: view.trailingAnchor, constant: 0).isActive = true
    issueInfoVC.view.bottomAnchor.constraint(equalTo: view.bottomAnchor, constant: 0).isActive = true
    heightConstraint = issueInfoVC.view.heightAnchor.constraint(equalTo: view.heightAnchor, multiplier: 0.25)
    heightConstraint?.isActive = true

    }
  
  @objc func editButtonTouched() {
    
    let storyboard = UIStoryboard(name: "Issue", bundle: nil)
    let newIssueVC = storyboard.instantiateViewController(identifier: "NewIssueVC", creator: { (coder) -> UpdateIssueViewController? in
      return UpdateIssueViewController(coder: coder, issueTitle: self.issue.issueTitle, issueNumber: self.issue.id)
    })
    present(newIssueVC, animated: true)
  }
  
  @objc func panGesture(recognizer: UIPanGestureRecognizer) {
    let translation = recognizer.translation(in: view)
    
    switch recognizer.state {
    case .began: startingOffset = heightConstraint?.constant ?? 0
    case .changed:
      let offset = startingOffset - translation.y
      var minOffset: CGFloat = 0
      
      issueDetailCollectionView.alpha = 1 - (0.5 * (offset / maxOffset))
      
      // This adds elasticity
      if offset < 0 {
        minOffset = -(0 - offset)/3
      }
      
      // ** Track bottom sheet with pan gesture by finding the diff
      // between translation and starting offset, then constraint
      // this value to be between our top margin and min height
      let currentOffset = min(maxOffset, max(minOffset, offset))
      heightConstraint?.constant = currentOffset
      
      // ** `offset` == 0 means the sheet is minimized
      // `offset` == `maxOffset` means the sheet is open
     if currentOffset == maxOffset {
        panGesture.isEnabled = false
        panGesture.isEnabled = true
    }
      
    case .ended, .cancelled:
      guard let offset = heightConstraint?.constant else { return }
      
      // ** Handle last position - if nearer to the top finish out the
      // animation to the top, and vice versa
      var finalOffset: CGFloat = offset > maxOffset/2 ? maxOffset : 0
      let velocity = recognizer.velocity(in: view).y
      
      // ** Toggle tableView scrollability
      // Handle "flick" action using `velocity`
      if velocity < -100 {
        finalOffset = maxOffset
      } else if offset > maxOffset/2 && velocity > 200 {
        finalOffset = 0
      }
      
      // ** Animate to top or bottom docking position when gesture ends
      // or is cancelled
      heightConstraint?.constant = finalOffset
      UIView.animate(withDuration: 0.6, delay: 0, usingSpringWithDamping: 0.8, initialSpringVelocity: 0.2, options: [.curveEaseOut, .allowUserInteraction], animations: { [weak self] in
        guard let strongSelf = self else { return }
        strongSelf.view.layoutIfNeeded()
        strongSelf.issueDetailCollectionView.alpha = 1 - (0.5 * (finalOffset / strongSelf.maxOffset))
        
      }, completion: nil)
      
    default: ()
    }
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
