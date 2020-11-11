//
//  MilestoneMarkLabel.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/09.
//

import UIKit

class MilestoneMarkLabel: PaddingLabel {
  override init(frame: CGRect) {
    super.init(frame: frame)
    configure()
  }
  
  var isOpen: Bool = true {
    willSet {
      layer.borderColor = newValue == true ? UIColor.systemGreen.cgColor : UIColor.systemRed.cgColor
    }
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configure()
  }
  
  private func configure() {
    layer.cornerRadius = 5
    layer.borderColor = UIColor.lightGray.cgColor
    layer.borderWidth = 1
    layer.masksToBounds = true
  }
}
