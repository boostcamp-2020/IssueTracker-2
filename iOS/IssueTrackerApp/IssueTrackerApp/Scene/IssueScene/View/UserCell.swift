//
//  userCell.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/11.
//

import UIKit

class UserCell: UICollectionViewCell, Reusable, NibLoadable {
  
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
    userNameLabel.text = user.name
    let urlString: String
    if user.profileImageUrl == "" {
      urlString =  "https://user-images.githubusercontent.com/65107199/98780537-4471a880-2438-11eb-95ab-0032ac67fee2.jpg"
    } else {
      urlString = user.profileImageUrl
    }
    
    guard let url = URL(string: urlString) else { return }
    let data = try? Data(contentsOf: url)
    userImageView.image = UIImage(data: data ?? Data())
  }
}
