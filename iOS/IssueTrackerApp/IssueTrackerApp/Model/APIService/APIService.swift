//
//  APIService.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/07.
//

import Foundation
import NetworkService

struct EndPoint<Datable: Encodable>: EndPointType {
  var baseURL: URL = URL(string: "http://49.50.167.109:3000")!
  var path: String
  var httpMethod: HTTPMethod
  var task: HTTPTask<Datable>
  var header: HTTPHeaders?
}

class APIService {
  //  private let router = Router<EndPoint>()
  func requestMilestone(forEndPoint endPoint: EndPoint<Milestone>, completion: @escaping NetworkRouterCompletion) {
    let router = Router<EndPoint<Milestone>>()
    let endPoint = EndPoint(path: endPoint.path, httpMethod: endPoint.httpMethod, task: endPoint.task)
    router.request(endPoint, completion: completion)
  }
  
  func requestIssue(forEndPoint endPoint: EndPoint<Issue>, completion: @escaping NetworkRouterCompletion) {
    let router = Router<EndPoint<Issue>>()
    let endPoint = EndPoint(path: endPoint.path, httpMethod: endPoint.httpMethod, task: endPoint.task)
    router.request(endPoint, completion: completion)
  }
}
