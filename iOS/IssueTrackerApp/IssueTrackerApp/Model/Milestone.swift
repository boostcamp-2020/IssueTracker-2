//
//  Milestone.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/05.
//

import Foundation

struct Milestone: Codable {
  var issueId: Int
  var milestoneName: String
  var milestoneDescription: String?
  var endDate: String
}
