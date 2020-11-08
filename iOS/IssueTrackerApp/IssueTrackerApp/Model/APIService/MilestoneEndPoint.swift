//
//  MilestoneEndPoint.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/07.
//

import Foundation

enum MilestoneEndPoint {
  case postMilestone(milestone: Milestone)
  case updateMilestone(milestone: Milestone)
  case getMilestones
  case getDetailMilestone(milestoneId: Int)
  case deleteMilestone(milestoneId: Int)
  
  var endPoint: EndPoint<Milestone> {
    switch self {
    case .postMilestone(let milestone):
      return EndPoint(
        path: "api/milestone",
        httpMethod: .post,
        task: .requestParmeters(
          bodyParameters: milestone,
          urlParameters: nil
        )
      )
    case .updateMilestone(let milestone):
      return EndPoint(
        path: "api/milestone",
        httpMethod: .post,
        task: .requestParmeters(
          bodyParameters: milestone,
          urlParameters: nil
        )
      )
    case .getMilestones:
      return EndPoint(
        path: "api/milestones",
        httpMethod: .get,
        task: .request
      )
    case .getDetailMilestone(let milestoneId):
      return EndPoint(
        path: "api/milestone\(milestoneId)",
        httpMethod: .get,
        task: .request
      )
    case .deleteMilestone(let milestoneId):
      return EndPoint(
        path: "api/milestone\(milestoneId)",
        httpMethod: .get,
        task: .request
      )
    }
  }
}
