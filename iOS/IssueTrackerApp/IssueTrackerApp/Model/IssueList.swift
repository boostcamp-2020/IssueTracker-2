//
//  IssueList.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/27.
//

import Foundation

struct IssueList: Hashable {
  var issues: [Issue]
  
  static let a = Issue(id: 0, userSid: 0, issueTitle: "레이블 목록보기 구현", issueAuthor: "Godrm")
//  Issue(id: 0, userSid: 0, issueTitle: "레이블 목록보기 구현", issueAuthor: "Godrm")
  static let b = Issue(id: 3, userSid: 0, issueTitle: "이슈 목록보기 구현", issueAuthor: "fElix-MR", comment: nil, label: nil, milestone: nil, issueStatus: true, assignee: nil)
  
  static let dummyIssues = [a, b]
}
