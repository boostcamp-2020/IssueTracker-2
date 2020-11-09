//
//  MileStoneList.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import Foundation

struct LabelList: Hashable {
  var labels: [Label]
  
  static let dummyLabels = [
    Label(id: 0, labelName: "feature", color: "#757575", labelDescription: "기능에 대한 레이블입니다."),
    Label(id: 1, labelName: "bug", color: "#ECCEF5", labelDescription: "수정할 버그에 대한 레이블입니다.")
  ]
}
