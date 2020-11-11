//
//  userCell.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/11.
//

import UIKit

class UserCell: UICollectionReusableView {
  
  @IBOutlet weak var userImageView: UIImageView!
  @IBOutlet weak var userNameLabel: UILabel!
  
  override func awakeFromNib() {
    super.awakeFromNib()
    configure()
  }
  
  private func configure() {
    userImageView.layer.cornerRadius = 5
  }
  
  func updateCell(withUser user: User) {
    guard let url = URL(string: user.profileImageUrl) else { return }
    let data = try? Data(contentsOf: url)
    userImageView.image = UIImage(data: data ?? Data())
    userNameLabel.text = user.name
  }
}
