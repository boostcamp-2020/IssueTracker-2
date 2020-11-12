//
//  Comment.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/05.
//

import Foundation

struct Comment: Codable, Hashable {
  var id: Int = 0
  var writerId: Int
  var description: String
  var createAt: String
}
