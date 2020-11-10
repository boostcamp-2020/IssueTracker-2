//
//  IssueCell.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/08.
//

import UIKit

class IssueCell: UICollectionViewCell, Reusable, NibLoadable {
  
  @IBOutlet weak var titleLabel: UILabel!
  @IBOutlet weak var milestoneLabel: MilestoneMarkLabel!
  @IBOutlet weak var labelLabel: UILabel!
  @IBOutlet weak var bigView: UIView!
  @IBOutlet weak var checkmarkImageView: UIImageView!
  @IBOutlet weak var closeLabel: UILabel!
  
  override var isSelected: Bool {
    didSet {
      checkmarkImageView.image = isSelected == true ? UIImage(systemName: "checkmark.circle")! : UIImage(systemName: "circle")!
    }
  }
  
  override func awakeFromNib() {
    super.awakeFromNib()
    configure()
  }
  
  private func configure() {
    layer.borderWidth = 0.25
    layer.borderColor = UIColor.lightGray.cgColor
  }
  
  func updateCell(withItem item: Issue) {
    titleLabel.text = item.issueTitle
    milestoneLabel.text = "마일스톤"
  }
  
  func editHiddenCell(status: Bool) {
    if status {
      self.bigView.transform = CGAffineTransform(translationX: 50, y: 0)
    } else {
      self.bigView.transform = .identity
    }
  }
  
  func editCurrentCell(status: Bool) {
    if status {
      UIView.animate(withDuration: 0.4) {
        self.bigView.transform = CGAffineTransform(translationX: 50, y: 0)
      }
    } else {
      UIView.animate(withDuration: 0.4) {
        self.bigView.transform = .identity
      }
    }
  }
}
