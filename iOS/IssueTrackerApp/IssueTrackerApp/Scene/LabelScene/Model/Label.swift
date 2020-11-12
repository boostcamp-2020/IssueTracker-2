//
//  Label.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/05.
//

import Foundation

struct Label: Codable, Hashable {
  static func == (lhs: Label, rhs: Label) -> Bool {
    return lhs.id == rhs.id &&
      lhs.labelName == rhs.labelName &&
      lhs.color == rhs.color &&
      lhs.labelDescription == rhs.labelDescription
  }
  
  func hash(into hasher: inout Hasher) {
    hasher.combine(id)
    hasher.combine(labelName)
    hasher.combine(color)
    hasher.combine(labelDescription)
  }
  
  var id: Int
  var labelName: String
  var color: String
  var labelDescription: String?
}
