//
//  Issue.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/27.
//

import Foundation

struct Issue: Hashable, Codable {
  static func == (lhs: Issue, rhs: Issue) -> Bool {
    return lhs.id == rhs.id &&
      lhs.label == rhs.label
  }
  
  func hash(into hasher: inout Hasher) {
    hasher.combine(id)
    hasher.combine(label)
  }
  
  var id: Int = 0
  var userSid: Int = 0
  var issueName: String
  var issueAuthor: String
  var comment: [Comment]?
  var label: [Label]?
  var milestone: Milestone?
  var issueStatus: Bool = true
  var assignee: [Int]?
}
