//
//  IssueFilterViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/03.
//

import UIKit

class IssueFilterViewController: UIViewController {
  
  typealias Snapshot = NSDiffableDataSourceSnapshot<FilterSection, String>
  
  lazy var dataSource = makeDataSource()
  var filterTableViewDelegate: UITableViewDelegate?
  
  @IBOutlet weak var filterTableView: UITableView!
  @IBAction func cancelButtonTouched(_ sender: UIBarButtonItem) {
    dismiss(animated: true, completion: nil)
  }
  
  @IBAction func doneButtonTouched(_ sender: UIBarButtonItem) {
    dismiss(animated: true, completion: nil)
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    filterTableView.delegate = filterTableViewDelegate
    applySnapshot()
    filterTableView.register(FilterIssueCell.self, forCellReuseIdentifier: "IssueFilterCell")
  }
  
  private func makeDataSource() -> FilterTableDataSource {
    let dataSource = FilterTableDataSource(tableView: filterTableView) { (tableView, indexPath, item) -> UITableViewCell? in
      guard let cell = tableView.dequeueReusableCell(
        withIdentifier: "IssueFilterCell",
        for: indexPath
      ) as? FilterIssueCell else { return UITableViewCell() }
      
      cell.updateCell(withText: item)
      
      if indexPath == IndexPath(row: 0, section: 0) {
        cell.accessoryType = .checkmark
        tableView.selectRow(at: indexPath, animated: true, scrollPosition: .none)
      }
      
      if indexPath.section == 1 {
        cell.accessoryType = .disclosureIndicator
      }
      
      return cell
    }
    
    return dataSource
  }
  
  private func applySnapshot(animatingDifferences: Bool = true) {
    var snapshot = Snapshot()
    snapshot.appendSections(FilterSection.allCases)
    let items = FilterItem.allCases.map { $0.rawValue }
    let detailItems = DetailFilterItem.allCases.map { $0.rawValue }
    snapshot.appendItems(items, toSection: .condition)
    snapshot.appendItems(detailItems, toSection: .detailContidion)
    dataSource.apply(snapshot, animatingDifferences: animatingDifferences)
  }
}
