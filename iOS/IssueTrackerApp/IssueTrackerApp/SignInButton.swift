//
//  SignInButton.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/27.
//

import UIKit

class SignInButton: UIButton {
  
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
  }
}
