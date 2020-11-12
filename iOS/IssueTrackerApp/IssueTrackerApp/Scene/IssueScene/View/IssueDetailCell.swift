//
//  IssueDetailCell.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/10.
//

import UIKit
import MarkdownView

class IssueDetailCell: UICollectionViewCell, Reusable, NibLoadable {
  
  @IBOutlet weak var profileImageView: UIImageView!
  @IBOutlet weak var userNameLabel: UILabel!
  @IBOutlet weak var timeLabel: UILabel!
  @IBOutlet weak var commentTextView: MarkdownView!
  
  override func awakeFromNib() {
    super.awakeFromNib()
    configure()
  }
  
  private func configure() {
    layer.borderWidth = 0.5
    layer.borderColor = UIColor.lightGray.cgColor
  }
  
  func updateCell(withItem item: Comment) {
    commentTextView.load(markdown: item.description)
    timeLabel.text = item.createAt
  }
}
