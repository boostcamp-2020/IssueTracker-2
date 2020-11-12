//
//  JSONParameterEncoder.swift
//  NetworkLayer
//
//  Created by 서명렬 on 2020/10/31.
//

import Foundation

struct JSONParameterEncoder: ParameterEncoder {
  
  static func encode<T: Encodable>(urlRequest: inout URLRequest, with parameters: T?) throws {
    guard let parameters = parameters else { return }
    do {
      let jsonEncoder = JSONEncoder()
      jsonEncoder.keyEncodingStrategy = .convertToSnakeCase
      let jsonAsData = try jsonEncoder.encode(parameters)
      urlRequest.httpBody = jsonAsData
      if urlRequest.value(forHTTPHeaderField: "Content-Type") == nil {
        urlRequest.setValue("application/json", forHTTPHeaderField: "Content-Type")
      }
    } catch {
      throw NetworkError.encodingFail
    }
  }
}
