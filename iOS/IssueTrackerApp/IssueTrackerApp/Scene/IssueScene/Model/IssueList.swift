//
//  IssueList.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/27.
//

import Foundation

struct DummyList: Hashable {
  
//  static var dummyUsers = [
//    User(id: 0, name: "songjucho", password: "12345", profileImageUrl: ""),
//    User(id: 1, name: "zlrlo", password: "12345", profileImageUrl: ""),
//    User(id: 2, name: "fElix-MR", password: "12345", profileImageUrl: ""),
//    User(id: 3, name: "puba5", password: "12345", profileImageUrl: ""),
//    User(id: 4, name: "msmk530", password: "12345", profileImageUrl: ""),
//  ]
  
  static var dummyIssues = [
    Issue(id: 0, userSid: 0, issueTitle: "레이블 목록보기 구현", issueAuthor: "songjucho", label: [Label(labelName: "라벨 1가나다라마바사아자차카", color: "#ECCEF5"), Label(id: 1, labelName: "라벨 1가나다라마바사아자", color: "#ECCEF5"), Label(id: 2, labelName: "라벨 1가나다라", color: "#ECCEF5"), Label(id: 3, labelName: "라벨 1가", color: "#ECCEF5")]),
    Issue(id: 1, userSid: 2, issueTitle: "마일스톤 목록", issueAuthor: "fElix-MR", label: [Label(labelName: "ABCDEFGHIJKLMNOPQRSTUVWXYZ", color: "#ECCEF5")]),
    Issue(id: 2, userSid: 1, issueTitle: "이슈 모델 구현", issueAuthor: "zlrlo", label: [Label(labelName: "라벨 3", color: "#ECCEF5")]),
    Issue(id: 3, userSid: 3, issueTitle: "Issue API", issueAuthor: "puba5", label: [Label(labelName: "라벨 4", color: "#ECCEF5")]),
    Issue(id: 4, userSid: 0, issueTitle: "마크다운뷰 UI 구성", issueAuthor: "songjucho", label: [Label(labelName: "라벨 5", color: "#ECCEF5"), Label(id: 1, labelName: "라벨 51", color: "#ECCEF5"), Label(id: 2, labelName: "라벨 52", color: "#ECCEF5"), Label(id: 3, labelName: "라벨 53", color: "#ECCEF5"), Label(id: 4, labelName: "라벨 54", color: "#ECCEF5"), Label(id: 5, labelName: "라벨 55", color: "#ECCEF5"), Label(id: 6, labelName: "라벨 56", color: "#ECCEF5"), Label(id: 7, labelName: "라벨 57", color: "#ECCEF5"), Label(id: 8, labelName: "라벨 58", color: "#ECCEF5"), Label(id: 9, labelName: "라벨 51", color: "#ECCEF5"), Label(id: 10, labelName: "라벨 51", color: "#ECCEF5"), Label(id: 11, labelName: "라벨 51", color: "#ECCEF5"), Label(id: 12, labelName: "라벨 51", color: "#ECCEF5")]),
    Issue(id: 5, userSid: 2, issueTitle: "특정 레이블 가져오기", issueAuthor: "fElix-MR", label: [Label(labelName: "라벨 4", color: "#ECCEF5")]),
    Issue(id: 6, userSid: 1, issueTitle: "마일스톤 조회 화면 API 연동", issueAuthor: "zlrlo", label: [Label(labelName: "라벨 4", color: "#ECCEF5")]),
    Issue(id: 7, userSid: 0, issueTitle: "저장 Button", issueAuthor: "songjucho", label: [Label(labelName: "라벨 4", color: "#ECCEF5")]),
    Issue(id: 8, userSid: 4, issueTitle: "레이블 업데이트 UI 구성", issueAuthor: "msmk530", label: [Label(labelName: "라벨 4", color: "#ECCEF5")]),
    Issue(id: 9, userSid: 3, issueTitle: "description 마크다운 변환", issueAuthor: "puba5", label: [Label(labelName: "라벨 4", color: "#ECCEF5")]),
    Issue(id: 10, userSid: 3, issueTitle: "로그인 상태 유무에 따른 라우팅 작업", issueAuthor: "puba5"),
    Issue(id: 11, userSid: 1, issueTitle: "레이블 페이지 마크업", issueAuthor: "zlrlo", label: [Label(labelName: "라벨 4", color: "#ECCEF5")]),
    Issue(id: 12, userSid: 0, issueTitle: "데이터베이스 스키마 구현", issueAuthor: "songjucho"),
    Issue(id: 13, userSid: 2, issueTitle: "공통 컴포넌트 작업", issueAuthor: "fElix-MR", label: [Label(labelName: "라벨 4", color: "#ECCEF5")])
  ]
  
  static var dummyLabels = [
    Label(id: 0, labelName: "iOS", color: "#00BFFF", labelDescription: "iOS 개발 관련 레이블"),
    Label(id: 1, labelName: "Backend", color: "#B40486", labelDescription: "백엔드 개발 관련 레이블"),
    Label(id: 2, labelName: "Frontend", color: "#298A08", labelDescription: "프론트엔드 개발 관련 레이블"),
    Label(id: 3, labelName: "bug", color: "#5858FA", labelDescription: "작동하지 않는 문제"),
    Label(id: 4, labelName: "invalid", color: "#01DF3A", labelDescription: "유효하지 않은 문제"),
    Label(id: 5, labelName: "UI", color: "#01DF3A", labelDescription: "UI 관련 레이블"),
    Label(id: 6, labelName: "enhancement", color: "#01DF3A", labelDescription: "새로운 feature나 request")
  ]
  
  static var dummyMilestones = [
    Milestone(id: 0, milestoneName: "스프린트 1", milestoneDescription: "이번 배포를 위한 스프린트", endDate: "2020-11-01", status: 0, openCount: 2, closeCount: 7),
    Milestone(id: 1, milestoneName: "스프린트 2", milestoneDescription: "다음 배포를 위한 스프린트", endDate: "2020-11-11", status: 1, openCount: 9, closeCount: 4)
  ]
}
