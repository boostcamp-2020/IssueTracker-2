//
//  LabelEndPoint.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/07.
//

import Foundation
import NetworkService

enum LabelEndPoint {
  case postLabel(label: Label)
  case updateLabel(label: Label)
  case getLabels
  case getDetailLabel(labelId: Int)
  case deleteLabel(labelId: Int)
  
  var endPoint: EndPoint<Label> {
    switch self {
    case .postLabel(let label):
      return EndPoint(
        path: "api/label",
        httpMethod: .post,
        task: .requestParameters(
          bodyParameters: label,
          urlParameters: nil
        )
      )
    case .updateLabel(let label):
      return EndPoint(
        path: "api/label",
        httpMethod: .put,
        task: .requestParameters(
          bodyParameters: label,
          urlParameters: nil
        )
      )
    case .getLabels:
      return EndPoint(
        path: "api/label",
        httpMethod: .get,
        task: .request
      )
    case .getDetailLabel(let labelId):
      return EndPoint(
        path: "api/label\(labelId)",
        httpMethod: .get,
        task: .request
      )
    case .deleteLabel(let labelId):
      return EndPoint(
        path: "api/label\(labelId)",
        httpMethod: .get,
        task: .request
      )
    }
  }
}
