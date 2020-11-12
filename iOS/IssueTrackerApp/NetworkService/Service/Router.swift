//
//  Router.swift
//  NetworkLayer
//
//  Created by 서명렬 on 2020/10/31.
//

import Foundation

public class Router<EndPoint: EndPointType>: NetworkRouter {
  private var task: URLSessionTask?
  
  public init() { }
  
  public func request<EndPoint: EndPointType>(_ route: EndPoint, completion: @escaping NetworkRouterCompletion) {
    let session = URLSession.shared
    do {
      let request = try buildRequest(from: route)
      task = session.dataTask(with: request, completionHandler: { (data, response, error) in
        completion(data, response, error)
      })
    } catch {
      completion(nil, nil, error)
    }
    task?.resume()
  }
  
  public func cancel() {
    task?.cancel()
  }
  
  fileprivate func buildRequest<EndPoint: EndPointType>(from route: EndPoint) throws -> URLRequest {
    var request = URLRequest(url: route.baseURL.appendingPathComponent(route.path),
                             cachePolicy: .reloadIgnoringLocalAndRemoteCacheData,
                             timeoutInterval: 10.0)

    request.httpMethod = route.httpMethod.rawValue
    
    do {
      switch route.task {
      case .request:
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
      case .requestParameters(let bodyParameters, let urlParameters):
        try configureParameters(bodyParameters: bodyParameters,
                                urlParameters: urlParameters,
                                request: &request)
        
      case .requestParametersAndHeaders(let bodyParameters,
                                        let urlParameters,
                                        let additionalHeaders):
        addAdditionalHeaders(additionalHeaders, request: &request)
        try configureParameters(bodyParameters: bodyParameters,
                                urlParameters: urlParameters,
                                request: &request)
      }
      
      return request
    } catch {
      throw error
    }
  }
  
  fileprivate func configureParameters<T: Encodable>(bodyParameters: T?,
                                                     urlParameters: [String: Any]?,
                                                     request: inout URLRequest) throws {
    do {
      if let bodyParameters = bodyParameters {
        try JSONParameterEncoder.encode(urlRequest: &request, with: bodyParameters)
      }
      if let urlParameters = urlParameters {
        try URLParameterEncoder.encode(urlRequest: &request, with: urlParameters)
      }
    } catch {
      throw error
    }
  }
  
  fileprivate func addAdditionalHeaders(_ additionalHeaders: HTTPHeaders?, request: inout URLRequest) {
    guard let headers = additionalHeaders else { return }
    for (key, value) in headers {
      request.setValue(value, forHTTPHeaderField: key)
    }
  }
}
