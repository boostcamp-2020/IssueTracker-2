//
//  IssueCell.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/27.
//

import UIKit

class IssueCell: UICollectionViewCell {
  
  @IBOutlet weak var titleLabel: UILabel!
  @IBOutlet weak var descriptionLabel: UILabel!
  
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
    titleLabel.text = title
    descriptionLabel.text = description
  }
}
