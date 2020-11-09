//
//  LabelMark.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import UIKit

class LabelMarkLabel: PaddingLabel {
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
    layer.masksToBounds = true
  }
  
  func setColor(withColor color: UIColor) {
    layer.borderColor = color.cgColor
    backgroundColor = color
  }
}
