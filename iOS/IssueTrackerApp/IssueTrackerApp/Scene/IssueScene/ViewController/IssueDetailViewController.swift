//
//  IssueDetailViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/10.
//

import UIKit
import MarkdownView

class IssueDetailViewController: UIViewController, UIGestureRecognizerDelegate {
  
  typealias DataSource = UICollectionViewDiffableDataSource<CommentSection, Comment>
  typealias Snapshot = NSDiffableDataSourceSnapshot<CommentSection, Comment>
  
  private lazy var dataSource = makeDataSource()
  
  var issue: Issue {
    willSet {
      DispatchQueue.main.async { [weak self] in
        self?.applySnapshot(animatingDifferences: true)
      }
    }
  }
  
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
    configureIssueDetailCollectionView()
    issueDetailCollectionView.register(IssueDetailCell.self)
    issueDetailCollectionView.registerHeader(IssueDetailHeader.self)
  }
  
  private func configureNavigator() {
    self.navigationItem.rightBarButtonItem = UIBarButtonItem(barButtonSystemItem: .edit, target: self, action: #selector(editButtonTouched))
  }
  
  private func configureIssueDetailCollectionView() {
    issueDetailCollectionView.delegate = self
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
      sectionHeader?.issueStatusLabel.layer.borderColor = self.issue.issueStatus == true ? UIColor.systemGreen.cgColor : UIColor.systemRed.cgColor
      sectionHeader?.issueStatusLabel.text = self.issue.issueStatus == true ? "✓ OPEN" : "✕ CLOSE"
      return sectionHeader
    }
    return dataSource
  }
  
  private func applySnapshot(animatingDifferences: Bool = true) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    let comments = [
      Comment(id: 0, writerId: 0, description: "> 과연 나올까??????", createAt: "2020-11-09"),
      Comment(id: 1, writerId: 1, description:
                """
                ## 안녕하세요 오늘은 빼빼로데이입니다
                > 행
                **복**
                ~~하~~
                세
                요
                """, createAt: "2020-11-08"),
      Comment(id: 2, writerId: 2, description: "ㅎㅇㅎㅇ", createAt: "2020-01-11")
    ]
    snapshot.appendItems(issue.comment ?? comments, toSection: .main)
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
    let multiplier = 166 / UIScreen.main.bounds.height
    heightConstraint = issueInfoVC.view.heightAnchor.constraint(equalTo: view.heightAnchor, multiplier: multiplier)
    heightConstraint?.isActive = true

    }
  
  @objc func editButtonTouched() {
    
    let storyboard = UIStoryboard(name: "Issue", bundle: nil)
    let newIssueVC = storyboard.instantiateViewController(identifier: "NewIssueVC", creator: { (coder) -> UpdateIssueViewController? in
      return UpdateIssueViewController(coder: coder, issueTitle: self.issue.issueName, issueNumber: self.issue.id)
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
      
      if offset < 0 {
        minOffset = -(0 - offset)/3
      }
      let currentOffset = min(maxOffset, max(minOffset, offset))
      heightConstraint?.constant = currentOffset
     if currentOffset == maxOffset {
        panGesture.isEnabled = false
        panGesture.isEnabled = true
    }
      
    case .ended, .cancelled:
      guard let offset = heightConstraint?.constant else { return }
      var finalOffset: CGFloat = offset > maxOffset/2 ? maxOffset : 0
      let velocity = recognizer.velocity(in: view).y

      if velocity < -100 {
        finalOffset = maxOffset
      } else if offset > maxOffset/2 && velocity > 200 {
        finalOffset = 0
      }

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
