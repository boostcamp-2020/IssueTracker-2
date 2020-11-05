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
  @IBOutlet weak var bigView: UIView!
  @IBOutlet weak var checkmarkImageView: UIImageView!
  
  override var isSelected: Bool {
    didSet {
      checkmarkImageView.image = isSelected == true ? UIImage(systemName: "checkmark.circle")! : UIImage(systemName: "circle")!
    }
  }
  
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
  
  func updateCell(withTitle title: String) {
    titleLabel.text = title
  }
  
  func editCell(status: Bool) {
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
