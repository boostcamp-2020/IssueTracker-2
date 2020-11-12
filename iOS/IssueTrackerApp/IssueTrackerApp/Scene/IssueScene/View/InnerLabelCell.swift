//
//  InnerLabelCellCollectionViewCell.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/10.
//

import UIKit

class InnerLabelCell: UICollectionViewCell, Reusable, NibLoadable {
  
  @IBOutlet weak var innerLabel: LabelMarkLabel!
  
  override func awakeFromNib() {
    super.awakeFromNib()
    // Initialization code
  }
  
  func updateCell(withLabel label: Label) {
    innerLabel.text = label.labelName
    let color = UIColor(hex: label.color)
    innerLabel.setColor(withColor: color)
  }
}
