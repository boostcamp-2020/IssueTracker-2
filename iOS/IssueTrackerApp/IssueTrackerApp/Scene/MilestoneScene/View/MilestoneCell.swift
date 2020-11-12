//
//  MilestoneCellCollectionViewCell.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import UIKit

class MilestoneCell: UICollectionViewCell, Reusable, NibLoadable {
  
  @IBOutlet weak var milestoneLabel: PaddingLabel!
  @IBOutlet weak var endDateLabel: UILabel!
  @IBOutlet weak var descriptionLabel: UILabel!
  @IBOutlet weak var percentageLabel: UILabel!
  @IBOutlet weak var openIssueLabel: UILabel!
  @IBOutlet weak var closedIssueLabel: UILabel!
  
  override func awakeFromNib() {
    super.awakeFromNib()
    configure()
  }
  
  private func configure() {
    layer.borderWidth = 0.25
    layer.borderColor = UIColor.lightGray.cgColor
  }
  
  func updateCell(withItem item: Milestone) {
    milestoneLabel.text = item.milestoneName
    endDateLabel.text = transformDate(fromDate: item.endDate)
    
    descriptionLabel.text = item.milestoneDescription
    let percentage: Int = item.openCount + item.closeCount == 0 ? 0 : Int(Float(item.closeCount) / Float(item.closeCount + item.openCount) * Float(100))
    percentageLabel.text = String(percentage) + "%"
    openIssueLabel.text = "\(item.openCount) open"
    closedIssueLabel.text = "\(item.closeCount) closed"
    
    milestoneLabel.layer.borderColor = item.status == 0 ? UIColor.systemGreen.cgColor : UIColor.systemRed.cgColor
  }
  
  private func transformDate(fromDate date: String) -> String {
    let dates = date.components(separatedBy: "-")
    return dates[0]+"년"+dates[1]+"월"+dates[2]+"일까지"
  }
}
