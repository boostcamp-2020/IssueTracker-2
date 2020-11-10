//
//  InnerLabelCell.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/10.
//

import UIKit

class InnerLabelCell: UICollectionViewCell, Reusable, NibLoadable {
  
  @IBOutlet weak var labelTitleLabel: LabelMarkLabel!
  
  override func awakeFromNib() {
    super.awakeFromNib()
  }
  
  func updateCell(withTitle title: String) {
    labelTitleLabel.text = title
  }
}
