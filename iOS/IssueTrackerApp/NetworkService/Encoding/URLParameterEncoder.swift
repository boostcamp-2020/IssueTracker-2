//
//  URLParameterEncoder.swift
//  NetworkLayer
//
//  Created by 서명렬 on 2020/10/31.
//

import Foundation

public struct URLParameterEncoder {
  public static func encode(urlRequest: inout URLRequest, with parameters: [String: Any]?) throws {
    guard let url = urlRequest.url else { throw NetworkError.missingURL }
    guard let parameters = parameters else { return }
    
    if var urlComponent = URLComponents(url: url, resolvingAgainstBaseURL: false) {
      urlComponent.queryItems = [URLQueryItem]()
      
      for (key, value) in parameters {
        let queryItem = URLQueryItem(name: key,
                                     value: "\(value)".addingPercentEncoding(withAllowedCharacters: .urlHostAllowed))
        urlComponent.queryItems?.append(queryItem)
      }
      
      urlRequest.url = urlComponent.url
    }
    
    if urlRequest.value(forHTTPHeaderField: "Content-Type") == nil {
      urlRequest.setValue("application/x-www-form-urlencoded; charset=utf-8",
                          forHTTPHeaderField: "Content-Type")
    }
  }
}
