//
//  Milestone.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/05.
//

import Foundation

struct Milestone: Codable, Hashable {
  static func == (lhs: Milestone, rhs: Milestone) -> Bool {
    return lhs.id == rhs.id
  }
  
  var id: Int = 0
  var milestoneName: String
  var milestoneDescription: String?
  var endDate: String
  var status: Int = 0
  var openCount: Int = 0
  var closeCount: Int = 0
}
