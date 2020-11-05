//
//  NewIssueButton.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/10/28.
//

import UIKit

class NewIssueButton: UIButton {

  override init(frame: CGRect) {
    super.init(frame: frame)
    configure()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configure()
  }
  
  private func configure() {
//    layer.cornerRadius = 25
//    layer.borderWidth = 5
//    layer.borderColor = UIColor.blue.cgColor
  }
}
