//
//  FilterIssueCell.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/03.
//

import UIKit

class FilterIssueCell: UITableViewCell {
  
  @IBOutlet weak var filterItemLabel: UILabel!
  
  func updateCell(withText text: String) {
    filterItemLabel.text = text
  }
}
