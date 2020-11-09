//
//  TabBarController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/07.
//

import UIKit

class TabBarController: UITabBarController {
  
  override func viewDidLoad() {
    super.viewDidLoad()
    
    let issueViewController = getViewController(storyboard: "Issue", identifier: "IssueViewController")
    issueViewController.tabBarItem = UITabBarItem(title: "이슈", image: .checkmark, selectedImage: .strokedCheckmark)
    
    let labelViewController = getViewController(storyboard: "Label", identifier: "LabelViewController")
    labelViewController.tabBarItem = UITabBarItem(title: "레이블", image: .checkmark, selectedImage: .strokedCheckmark)
    
    let milestoneViewController = getViewController(storyboard: "Milestone", identifier: "MilestoneViewController")
    milestoneViewController.tabBarItem = UITabBarItem(title: "마일스톤", image: .checkmark, selectedImage: .strokedCheckmark)
    
    viewControllers = [
      UINavigationController(rootViewController: issueViewController),
      UINavigationController(rootViewController: labelViewController),
      UINavigationController(rootViewController: milestoneViewController)
    ]
  }
  
  func getViewController(storyboard: String, identifier: String) -> UIViewController {
    let storyboard = UIStoryboard(name: storyboard, bundle: nil)
    let VC = storyboard.instantiateViewController(withIdentifier: identifier)
    return VC
  }
}
