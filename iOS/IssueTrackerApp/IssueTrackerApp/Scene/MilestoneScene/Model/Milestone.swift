//
//  Milestone.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/05.
//

import Foundation

struct Milestone: Codable, Hashable {
  static func == (lhs: Milestone, rhs: Milestone) -> Bool {
    return lhs.id == rhs.id &&
      lhs.milestoneName == rhs.milestoneName &&
      lhs.milestoneDescription == rhs.milestoneDescription &&
      lhs.endDate == rhs.endDate &&
      lhs.status == rhs.status &&
      lhs.openCount == rhs.openCount &&
      lhs.closeCount == rhs.closeCount
  }
  
  func hash(into hasher: inout Hasher) {
    hasher.combine(id)
    hasher.combine(milestoneName)
    hasher.combine(milestoneDescription)
    hasher.combine(endDate)
    hasher.combine(status)
    hasher.combine(openCount)
    hasher.combine(closeCount)
  }
  
  var id: Int
  var milestoneName: String
  var milestoneDescription: String?
  var endDate: String
  var status: Int
  var openCount: Int
  var closeCount: Int
}
