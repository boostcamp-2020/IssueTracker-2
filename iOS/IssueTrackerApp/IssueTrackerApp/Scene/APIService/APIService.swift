//
//  APIService.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/07.
//

import Foundation
import NetworkService

struct EndPoint<Datable: Encodable>: EndPointType {
  var baseURL: URL = URL(string: "http://101.101.218.59:3000")!
  var path: String
  var httpMethod: HTTPMethod
  var task: HTTPTask<Datable>
  var header: HTTPHeaders?
}

class APIService {
  func requestMilestone(forEndPoint endPoint: EndPoint<Milestone>,
                        completion: @escaping NetworkRouterCompletion) {
    let router = Router<EndPoint<Milestone>>()
    router.request(endPoint, completion: completion)
  }
  
  func requestIssue(forEndPoint endPoint: EndPoint<Issue>,
                    completion: @escaping NetworkRouterCompletion) {
    let router = Router<EndPoint<Issue>>()
    router.request(endPoint, completion: completion)
  }
  
  func requestLabel(forEndPoint endPoint: EndPoint<Label>,
                    completion: @escaping NetworkRouterCompletion) {
    let router = Router<EndPoint<Label>>()
    router.request(endPoint, completion: completion)
  }
}
