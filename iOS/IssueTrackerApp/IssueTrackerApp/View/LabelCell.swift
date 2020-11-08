//
//  LabelCellCollectionViewCell.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import UIKit

class LabelCell: UICollectionViewCell {
    
  @IBOutlet weak var labelMark: UILabel!
  @IBOutlet weak var labelDescription: UILabel!
  
  override init(frame: CGRect) {
    super.init(frame: frame)
    configure()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configure()
  }
  
  private func configure() {
    layer.borderWidth = 0.2
    layer.borderColor = UIColor.lightGray.cgColor
  }
  
  func updateCell(withTitle title: String, description: String) {
    labelMark.text = title
    labelDescription.text = description
    // labelMark.backgroundColor =
  }
}
