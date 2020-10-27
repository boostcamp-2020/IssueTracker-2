//
//  IssueList.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/27.
//

import Foundation

struct IssueList: Hashable {
  var issues: [Issue]
  
  static let dummyIssues = [Issue(title: "레이블 목록보기 구현", description: "레이블 전체 목록을 볼 수 있어야 한다 2줄까지 보입니다."),
                            Issue(title: "마일스톤 목록 보기 구현", description: "마일스톤 목록 보기 구현"),
                            Issue(title: "레이블 목록보기 구현1", description: "레이블 전체 목록을 볼 수 있어야 한다 2줄까지 보입니다."),
                            Issue(title: "마일스톤 목록 보기 구현1", description: "마일스톤 목록 보기 구현"),
                            Issue(title: "레이블 목록보기 구현2", description: "레이블 전체 목록을 볼 수 있어야 한다 2줄까지 보입니다."),
                            Issue(title: "마일스톤 목록 보기 구현2", description: "마일스톤 목록 보기 구현"),
                            Issue(title: "레이블 목록보기 구현3", description: "레이블 전체 목록을 볼 수 있어야 한다 2줄까지 보입니다."),
                            Issue(title: "마일스톤 목록 보기 구현3", description: "마일스톤 목록 보기 구현"),
                            Issue(title: "레이블 목록보기 구현4", description: "레이블 전체 목록을 볼 수 있어야 한다 2줄까지 보입니다."),
                            Issue(title: "마일스톤 목록 보기 구현4", description: "마일스톤 목록 보기 구현")]
}
