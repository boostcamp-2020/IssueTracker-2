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
  
  var dummyData = DummyList()
  
  override func awakeFromNib() {
    super.awakeFromNib()
    configure()
  }
  
  private func configure() {
    layer.borderWidth = 0.5
    layer.borderColor = UIColor.lightGray.cgColor
  }

  
  func updateCell(withItem item: Comment) {
    userNameLabel.text = dummyData.getUser(withID: item.writerId)?.name
    
    let urlString: String
    if dummyData.getUser(withID: item.writerId)?.profileImageUrl == "" {
      urlString =  "https://user-images.githubusercontent.com/65107199/98780537-4471a880-2438-11eb-95ab-0032ac67fee2.jpg"
    } else {
      urlString = dummyData.getUser(withID: item.writerId)?.profileImageUrl ?? ""
    }
    
    guard let url = URL(string: urlString) else { return }
    let data = try? Data(contentsOf: url)
    profileImageView.image = UIImage(data: data ?? Data())
    
    commentTextView.load(markdown: item.description)
    timeLabel.text = item.createAt
  }
}
