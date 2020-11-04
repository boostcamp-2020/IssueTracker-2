//
//  IssueFilterHeader.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/03.
//

import UIKit

class IssueFilterHeader: UITableViewHeaderFooterView {
  
  static var reuseIdentifier: String {
      return String(describing: IssueFilterHeader.self)
  }
  
  lazy var headerLabel: UILabel = {
    let label = UILabel()
    label.font = UIFont.systemFont(ofSize: 15, weight: .medium)
    label.translatesAutoresizingMaskIntoConstraints = false
    return label
  }()
  
  override init(reuseIdentifier: String?) {
    super.init(reuseIdentifier: reuseIdentifier)
    configureHeaderLabel()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configureHeaderLabel()
  }
  
  func configureHeaderLabel() {
    addSubview(headerLabel)
    NSLayoutConstraint.activate([
      headerLabel.topAnchor.constraint(equalTo: self.topAnchor ,constant: 2),
      headerLabel.bottomAnchor.constraint(equalTo: self.bottomAnchor, constant: -2),
      headerLabel.leadingAnchor.constraint(equalTo: self.leadingAnchor,constant: 8),
      headerLabel.trailingAnchor.constraint(equalTo: self.trailingAnchor, constant: -8),
    ])
  }
  
  func updateHeader(withText text: String) {
    headerLabel.text = text
  }
}
