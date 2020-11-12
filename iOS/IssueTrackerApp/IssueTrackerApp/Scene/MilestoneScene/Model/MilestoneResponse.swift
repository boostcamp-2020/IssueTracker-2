//
//  MilestoneResponse.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/09.
//

import Foundation

struct MilestoneResponse: Codable {
  var message: String
  var milestonesInfo: MilestonesInfo
  
  struct MilestonesInfo: Codable {
    var openTotalCount: Int
    var closeTotalCount: Int
    var milestoneArray: [Milestone]
  }
}

