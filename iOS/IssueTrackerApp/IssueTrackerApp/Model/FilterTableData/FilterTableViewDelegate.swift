//
//  FilterTableViewDelegate.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/04.
//

import UIKit

class FilterTableViewDelegate: NSObject, UITableViewDelegate {
  func tableView(_ tableView: UITableView, willSelectRowAt indexPath: IndexPath) -> IndexPath? {
    tableView.indexPathsForSelectedRows?
      .filter {
        $0.section == indexPath.section &&
        $0.section == 0
      }
      .forEach {
        tableView.deselectRow(at: $0, animated: true)
        tableView.cellForRow(at: $0)?.accessoryType = .none
      }
    if let cell = tableView.cellForRow(at: indexPath),
       indexPath.section == 0 {
      cell.accessoryType = .checkmark
    }
    return indexPath
  }
  
  func tableView(_ tableView: UITableView, willDeselectRowAt indexPath: IndexPath) -> IndexPath? {
    if tableView.indexPathForSelectedRow == indexPath {
      return nil
    }
    return indexPath
  }
}
