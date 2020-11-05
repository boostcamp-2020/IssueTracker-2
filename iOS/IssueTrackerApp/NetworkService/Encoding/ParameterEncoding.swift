//
//  Parameters.swift
//  NetworkLayer
//
//  Created by 서명렬 on 2020/10/31.
//

import Foundation

public typealias Parameters = [String: Encodable]

public protocol ParameterEncoder {
  static func encode<T: Encodable>(urlRequest: inout URLRequest, with parameters: T) throws
}

public enum NetworkError: String, Error {
  case parametersNil = "Parameter were nil."
  case encodingFail = "Parameter encoding failed."
  case missingURL = "URL is nil."
}
