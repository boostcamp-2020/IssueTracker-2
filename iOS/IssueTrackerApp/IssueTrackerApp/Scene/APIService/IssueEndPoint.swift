//
//  IssueEndPoint.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/07.
//

import Foundation
import NetworkService

enum IssueEndPoint {
  case postIssue(issue: Issue)
  case updateIssue(issue: Issue)
  case getOpenIssues
  case getYourIssues(id: Int)
  case getAssignedIssues(id: Int)
//  case getMentioningIssues
  case getCloseIssues
  case getDetailIssue(issueId: Int)
  case deleteIssue(issueId: Int)
  
  var endPoint: EndPoint<Issue> {
    switch self {
    case .postIssue(let issue):
      return EndPoint<Issue>(
        path: "api/issue",
        httpMethod: .post,
        task: .requestParameters(
          bodyParameters: issue,
          urlParameters: nil)
      )
    case .updateIssue(let issue):
      return EndPoint<Issue>(
        path: "api/issue",
        httpMethod: .post,
        task: .requestParameters(
          bodyParameters: issue,
          urlParameters: nil
        )
      )
    case .getOpenIssues:
      return EndPoint<Issue>(
        path: "api/issue/all",
        httpMethod: .get,
        task: .requestParameters(
          bodyParameters: nil,
          urlParameters: ["fliter": "open"]
        )
      )
    case .getYourIssues(let id):
      return EndPoint<Issue>(
        path: "api/issue/all",
        httpMethod: .get,
        task: .requestParameters(
          bodyParameters: nil,
          urlParameters: ["filter": "your",
                          "id": "\(id)"]
        )
      )
    case .getAssignedIssues(let id):
      return EndPoint<Issue>(
        path: "api/issue/all",
        httpMethod: .get,
        task: .requestParameters(
          bodyParameters: nil,
          urlParameters: ["filter": "assigned",
                          "id": "\(id)"]
        )
      )
    case .getCloseIssues:
      return EndPoint<Issue>(
        path: "api/issue/all",
        httpMethod: .get,
        task: .requestParameters(
          bodyParameters: nil,
          urlParameters: ["filter": "close"]
        )
      )
    case .getDetailIssue(let issueId):
      return EndPoint<Issue>(
        path: "api/issue\(issueId)",
        httpMethod: .get,
        task: .request
      )
    case .deleteIssue(let issueId):
      return EndPoint<Issue>(
        path: "api/issue\(issueId)",
        httpMethod: .post,
        task: .request
      )
    }
  }
}
