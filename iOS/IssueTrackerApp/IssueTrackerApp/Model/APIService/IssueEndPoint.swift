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
  case getIssues
  case getDetailIssue(issueId: Int)
  case deleteIssue(issueId: Int)
  
  var endPoint: EndPoint<Issue> {
    switch self {
    case .postIssue(let issue):
      return EndPoint<Issue>(
        path: "api/issue",
        httpMethod: .post,
        task: .requestParmeters(
          bodyParameters: issue,
          urlParameters: nil)
      )
    case .updateIssue(let issue):
      return EndPoint<Issue>(
        path: "api/issue",
        httpMethod: .post,
        task: .requestParmeters(
          bodyParameters: issue,
          urlParameters: nil
        )
      )
    case .getIssues:
      return EndPoint<Issue>(
        path: "api/issues",
        httpMethod: .get,
        task: .request
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
