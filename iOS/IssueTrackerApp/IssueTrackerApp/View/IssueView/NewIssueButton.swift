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
    layer.cornerRadius = 25
    layer.borderWidth = 5
    layer.borderColor = #colorLiteral(red: 0.476841867, green: 0.5048075914, blue: 1, alpha: 1)
    layer.shadowOffset = CGSize(width: 1, height: 3)
    layer.shadowColor = UIColor.gray.cgColor
    layer.shadowOpacity = 0.7
  }
}
