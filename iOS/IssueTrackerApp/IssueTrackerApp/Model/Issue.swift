//
//  Issue.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/27.
//

import Foundation

struct Issue: Hashable {
  static func == (lhs: Issue, rhs: Issue) -> Bool {
    return lhs.id == rhs.id
  }
  
  func hash(into hasher: inout Hasher) {
    hasher.combine(id)
  }
  
  var id: Int
  var userSid: Int
  var issueTitle: String
  var issueAuthor: String
  var comment: [Comment]?
  var label: [Label]?
  var milestone: Milestone?
  var issueStatus: Bool = true
  var assignee: [Int]?
}
