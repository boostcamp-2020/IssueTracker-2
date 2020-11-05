//
//  FilterItem.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/04.
//

import Foundation

enum FilterItem: String, CaseIterable {
  case open = "열린 이슈들"
  case your = "내가 작성한 이슈들"
  case assigned = "나한테 할당된 이슈들"
  case dat = "내가 댓글을 남긴 이슈들"
  case closed = "닫힌 이슈들"
}

enum DetailFilterItem: String, CaseIterable {
  case writer = "작성자"
  case label = "레이블"
  case milstone = "마일스톤"
  case assignee = "담당자"
}
