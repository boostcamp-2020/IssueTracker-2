//
//  IssueInfoButton.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/11.
//

import UIKit

class IssueInfoButton: UIButton {

  override init(frame: CGRect) {
    super.init(frame: frame)
    configure()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configure()
  }
  
  private func configure() {
    layer.cornerRadius = 5
    layer.borderWidth = 0.5
    layer.borderColor = UIColor.lightGray.cgColor
  }
}
