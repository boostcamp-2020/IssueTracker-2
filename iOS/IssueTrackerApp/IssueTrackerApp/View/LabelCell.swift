//
//  MyLabelCell.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/08.
//

import UIKit

class LabelCell: UICollectionViewCell, Reusable, NibLoadable {
  
  @IBOutlet weak var labelTitleLabel: UILabel!
  @IBOutlet weak var labelDescriptionLabel: UILabel!
  
  
  override func awakeFromNib() {
    super.awakeFromNib()
  }
  
  func updateCell(withTitle title: String, description: String) {
    labelTitleLabel.text = title
    labelDescriptionLabel.text = description
  }
}
