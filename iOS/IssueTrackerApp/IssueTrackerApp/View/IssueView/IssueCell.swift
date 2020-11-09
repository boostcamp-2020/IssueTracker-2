//
//  IssueCell.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/08.
//

import UIKit

class IssueCell: UICollectionViewCell, Reusable, NibLoadable {
  
  @IBOutlet weak var titleLabel: UILabel!
  @IBOutlet weak var milestoneLabel: UILabel!
  @IBOutlet weak var labelLabel: UILabel!
  @IBOutlet weak var bigView: UIView!
  @IBOutlet weak var checkmarkImageView: UIImageView!
  
  override var isSelected: Bool {
    didSet {
      checkmarkImageView.image = isSelected == true ? UIImage(systemName: "checkmark.circle")! : UIImage(systemName: "circle")!
    }
  }
  
  override func awakeFromNib() {
    super.awakeFromNib()
  }
  
  func updateCell(withTitle title: String) {
    titleLabel.text = title
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
