//
//  User.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/10.
//

import Foundation

struct User: Hashable {
  var id: Int
  var name: String
  var password: String
  var profileImageUrl: String = ""
}
