//
//  IssueDetailViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/10.
//

import UIKit

class IssueDetailViewController: UIViewController {
  
  var issue: Issue
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configureNavigator()
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
  
  @objc func editButtonTouched() {
    
    let storyboard = UIStoryboard(name: "Issue", bundle: nil)
    let newIssueVC = storyboard.instantiateViewController(identifier: "NewIssueVC", creator: { (coder) -> UpdateIssueViewController? in
      return UpdateIssueViewController(coder: coder, issueTitle: self.issue.issueTitle, issueNumber: self.issue.id)
    })
    present(newIssueVC, animated: true)
  }
  
}
