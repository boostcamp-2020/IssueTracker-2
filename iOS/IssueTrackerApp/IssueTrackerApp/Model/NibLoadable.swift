//
//  NibLoadable.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/08.
//

import UIKit

protocol NibLoadable: class {
  static var nibName: String { get }
}

extension NibLoadable where Self: UIView {
  static var nibName: String {
    return NSStringFromClass(self).components(separatedBy: ".").last!
  }
}
