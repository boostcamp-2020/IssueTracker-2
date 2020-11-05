//
//  EndPointType.swift
//  NetworkLayer
//
//  Created by 서명렬 on 2020/10/31.
//

import Foundation

public protocol EndPointType {
  associatedtype Datable: Encodable
  var baseURL: URL { get }
  var path: String { get }
  var httpMethod: HTTPMethod { get }
  var task: HTTPTask<Datable> { get }
  var header: HTTPHeaders? { get }
}
