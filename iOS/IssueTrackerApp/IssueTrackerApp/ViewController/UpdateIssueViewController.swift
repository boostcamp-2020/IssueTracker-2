//
//  UpdateIssueViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/10/28.
//

import UIKit

class UpdateIssueViewController: UIViewController {
  
  @IBOutlet weak var navigationBar: UINavigationBar!
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configureNavigationBar()
  }
  
  private func configureNavigationBar() {
    navigationBar.topItem?.title = "새이슈"
  }
}
