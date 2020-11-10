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
  
  override func awakeFromNib() {
        super.awakeFromNib()
    }
  
  func updateHeader(withItem item: Issue) {
    issueIDLabel.text = "#" + String(item.id)
    issueTitleLabel.text = item.issueTitle
    // issueStatusLabel.text =
  }
    
}
