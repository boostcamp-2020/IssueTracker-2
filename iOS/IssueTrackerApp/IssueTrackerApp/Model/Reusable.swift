//
//  Reusable.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/08.
//

import UIKit

protocol Reusable {
  static var defaultReuseIdentifier: String { get }
}

extension Reusable where Self: UIView {
  static var defaultReuseIdentifier: String {
    return NSStringFromClass(self).components(separatedBy: ".").last ?? ""
  }
}
