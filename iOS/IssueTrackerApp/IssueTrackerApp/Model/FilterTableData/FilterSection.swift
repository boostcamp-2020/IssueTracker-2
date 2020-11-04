//
//  FilterSection.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/04.
//

import Foundation

enum FilterSection: CaseIterable {
  case condition
  case detailContidion
  
  var header: String {
    switch self {
    case .condition:
      return "다음 중에 조건을 고르세요"
    case .detailContidion:
      return "세부 조건"
    }
  }
}
