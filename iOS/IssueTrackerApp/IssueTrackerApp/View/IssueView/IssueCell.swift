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
  
  var isEdited: Bool = false {
    willSet {
      newValue == true ? editStart() : editEnd()
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
  
  func updateCell(withTitle title: String, description: String) {
    titleLabel.text = title
    descriptionLabel.text = description
  }
  
  private func editStart() {
    UIView.animate(withDuration: 0.5) { [weak self] in
      self?.bigView.transform = CGAffineTransform(translationX: 50, y: 0)
//      self?.bigView.transform = CGAffineTransform(scaleX: 0.9, y: 0.9)
    }
  }
  
  private func editEnd() {
    UIView.animate(withDuration: 0.5) { [weak self] in
      self?.bigView.transform = .identity
    }
  }
}
