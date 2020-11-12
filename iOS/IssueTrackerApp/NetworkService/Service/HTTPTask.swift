//
//  HTTPTask.swift
//  NetworkLayer
//
//  Created by 서명렬 on 2020/10/31.
//

import Foundation

public typealias HTTPHeaders = [String: String]

public enum HTTPTask<T: Encodable> {
  case request
  case requestParameters(bodyParameters: T?,
                         urlParameters: [String: Any]?)
  case requestParametersAndHeaders(bodyParameters: T?,
                                   urlParameters: [String: Any]?,
                                   additionHeaders: HTTPHeaders?)
  
  // case download, upload ... etc..
}
