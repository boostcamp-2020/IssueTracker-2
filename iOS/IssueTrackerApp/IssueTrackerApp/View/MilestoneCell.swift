//
//  MilestoneCellCollectionViewCell.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import UIKit

class MilestoneCell: UICollectionViewCell {
  
  @IBOutlet weak var milestoneLabel: UILabel!
  @IBOutlet weak var endDateLabel: UILabel!
  @IBOutlet weak var descriptionLabel: UILabel!
  @IBOutlet weak var percentageLabel: UILabel!
  @IBOutlet weak var openIssueLabel: UILabel!
  @IBOutlet weak var closedIssueLabel: UILabel!
  
  override func awakeFromNib() {
    super.awakeFromNib()
  }
  
  func updateCell(withMilestone milestone: String, endDate: String, description: String, percentage: String, openIssue: String, closedIssue: String) {
    milestoneLabel.text = milestone
    endDateLabel.text = transformDate(fromDate: endDate)
    descriptionLabel.text = description
    percentageLabel.text = percentage + "%"
    openIssueLabel.text = openIssue + "open"
    closedIssueLabel.text = closedIssue + "closed"
  }
  
  private func transformDate(fromDate date: String) -> String {
    let dates = date.components(separatedBy: "-")
    return dates[0]+"년"+dates[1]+"월"+dates[2]+"일까지"
  }
}
