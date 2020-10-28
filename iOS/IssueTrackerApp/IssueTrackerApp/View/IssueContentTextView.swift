//
//  IssueContentTextView.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/28.
//

import UIKit

class IssueContentTextView: UITextView {
  
  override init(frame: CGRect, textContainer: NSTextContainer?) {
    super.init(frame: frame, textContainer: textContainer)
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
  }
  
  override func canPerformAction(_ action: Selector, withSender sender: Any?) -> Bool {
    return action == #selector(openLibrary)
  }

  @objc func openLibrary() {
  }
}
