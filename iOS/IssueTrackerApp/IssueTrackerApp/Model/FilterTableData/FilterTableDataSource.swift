//
//  FilterTableDataSource.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/03.
//

import UIKit

class FilterTableDataSource: UITableViewDiffableDataSource<FilterSection, String> {
  override func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
    return snapshot().sectionIdentifiers[section].header
  }
}
