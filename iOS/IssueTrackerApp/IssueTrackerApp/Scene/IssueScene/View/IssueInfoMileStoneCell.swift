//
//  IssueInfoMileStoneCell.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/11.
//

import UIKit

class IssueInfoMileStoneCell: UICollectionViewCell, Reusable, NibLoadable {
  
  @IBOutlet weak var milestoneTitleLabel: UILabel!
  @IBOutlet weak var milestoneProgressView: UIProgressView!
  
  override func awakeFromNib() {
    super.awakeFromNib()
    configure()
  }
  
  private func configure() {
    layer.borderWidth = 0.5
    layer.borderColor = UIColor.gray.cgColor
    layer.cornerRadius = 5
  }
  
  func updateCell(withMilestone milestone: Milestone) {
    milestoneTitleLabel.text = milestone.milestoneName
    let percentage: Int = milestone.openCount + milestone.closeCount == 0 ? 0 : Int(Float(milestone.closeCount) / Float(milestone.closeCount + milestone.openCount) * Float(100))
    milestoneProgressView.setProgress(Float(percentage)/100, animated: false)
  }
  
}
