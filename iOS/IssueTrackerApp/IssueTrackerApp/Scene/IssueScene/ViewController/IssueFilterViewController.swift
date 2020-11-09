//
//  IssueFilterViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/03.
//

import UIKit

@propertyWrapper
struct SelectedRow {
  var wrappedValue: Int {
    get {
      guard let str = UserDefaults.standard.string(forKey: "selectedRow") else { return 0 }
      return Int(str) ?? 0
    }
    set {
      UserDefaults.standard.setValue(newValue, forKey: "selectedRow")
    }
  }
}

class IssueFilterViewController: UIViewController {
  
  typealias Snapshot = NSDiffableDataSourceSnapshot<FilterSection, String>
  
  lazy var dataSource = makeDataSource()
  var filterTableViewDelegate: FilterTableViewDelegate
  
  @IBOutlet weak var filterTableView: UITableView!
  @IBAction func cancelButtonTouched(_ sender: UIBarButtonItem) {
    dismiss(animated: true, completion: nil)
  }
  
  @IBAction func doneButtonTouched(_ sender: UIBarButtonItem) {
    dismiss(animated: true, completion: nil)
  }
  
  init?(coder: NSCoder, tableViewDelegate: FilterTableViewDelegate) {
    filterTableViewDelegate = tableViewDelegate
    super.init(coder: coder)
  }
  
  required init?(coder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
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
      
      if indexPath == IndexPath(row: self.filterTableViewDelegate.selectedFilterRow, section: 0) {
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
