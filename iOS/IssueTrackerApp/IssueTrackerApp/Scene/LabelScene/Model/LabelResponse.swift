//
//  LabelResponse.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/10.
//

import Foundation

struct LabelResponse: Decodable {
  var message: String
  var labels: [Label]
}
