//
//  IssueDetailHeader.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/10.
//

import UIKit

class IssueDetailHeader: UICollectionReusableView, NibLoadable, Reusable {

  @IBOutlet weak var profileImageView: UIImageView!
  @IBOutlet weak var userNameLabel: UILabel!
  @IBOutlet weak var issueIDLabel: UILabel!
  @IBOutlet weak var issueTitleLabel: UILabel!
  @IBOutlet weak var issueStatusLabel: LabelMarkLabel!
  
  var dummyData = DummyList()
  
  override func awakeFromNib() {
        super.awakeFromNib()
    }
  
  func updateHeader(withItem item: Issue) {
    issueIDLabel.text = "#" + String(item.id)
    issueTitleLabel.text = item.issueName
    userNameLabel.text = dummyData.getUser(withID: item.userSid)?.name
    let urlString: String
    if dummyData.getUser(withID: item.userSid)?.profileImageUrl == "" {
      urlString =  "https://user-images.githubusercontent.com/65107199/98780537-4471a880-2438-11eb-95ab-0032ac67fee2.jpg"
    } else {
      urlString = dummyData.getUser(withID: item.userSid)?.profileImageUrl ?? ""
    }
    
    guard let url = URL(string: urlString) else { return }
    let data = try? Data(contentsOf: url)
    profileImageView.image = UIImage(data: data ?? Data())
  }
    
}
