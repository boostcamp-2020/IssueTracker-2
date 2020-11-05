//
//  NetworkRouter.swift
//  NetworkLayer
//
//  Created by 서명렬 on 2020/10/31.
//

import Foundation

public typealias NetworkRouterCompletion = (
  _ data: Data?,
  _ response: URLResponse?,
  _ error: Error?
) -> ()

protocol NetworkRouter: class {
  associatedtype EndPoint: EndPointType
  func request(_ route: EndPoint, completion: @escaping NetworkRouterCompletion)
  func cancel()
}
