//
//  IssueSection.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/10/28.
//

import Foundation

enum IssueSection {
  case main
}

// 옮기기

enum LabelSection {
  case main
}

enum MilestoneSection {
  case main
}

enum CommentSection {
  case main
}

enum IssueInfoSection: CaseIterable {
  case assignee
  case label
  case milestone
  
  var header: String {
    switch self {
    case .assignee:
      return "담당자"
    case .label:
      return "레이블"
    case .milestone:
      return "마일스톤"
    }
  }
}
