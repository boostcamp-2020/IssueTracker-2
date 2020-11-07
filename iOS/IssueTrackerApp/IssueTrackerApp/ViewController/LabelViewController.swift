//
//  LabelViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/07.
//

import UIKit

class LabelViewController: UIViewController, UINavigationBarDelegate {
  
  lazy var addButton: UIBarButtonItem = {
    let button = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(self.addButtonTapped))
    return button
  }()
  
  override func viewDidLoad() {
    super.viewDidLoad()
    navigationController?.navigationBar.prefersLargeTitles = true
    navigationController?.navigationBar.topItem?.title = "레이블"
    self.navigationItem.rightBarButtonItem = self.addButton
  }
  
  @objc func addButtonTapped() {
    print("안녕")
  }
}
