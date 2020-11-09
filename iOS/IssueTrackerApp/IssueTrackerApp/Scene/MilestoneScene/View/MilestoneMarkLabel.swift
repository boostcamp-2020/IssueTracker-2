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
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configure()
  }
  
  private func configure() {
    layer.cornerRadius = 5
    layer.borderColor = UIColor.systemRed.cgColor
    layer.borderWidth = 1
    layer.masksToBounds = true
  }
  
  func setColor(withColor color: UIColor) {
    layer.borderColor = color.cgColor
  }
}
