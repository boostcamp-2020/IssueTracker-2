//
//  Label.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/05.
//

import Foundation

struct Label: Codable {
  var id: Int
  var labelName: String
  var color: String
  var labelDescription: String?
}
