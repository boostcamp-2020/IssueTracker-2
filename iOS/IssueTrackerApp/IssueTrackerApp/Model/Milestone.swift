//
//  Milestone.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/05.
//

import Foundation

struct Milestone: Codable, Hashable {
  var id: Int
  var milestoneName: String
  var milestoneDescription: String?
  var endDate: String
  var status: Int
  var openCount: Int
  var closeCount: Int
}
