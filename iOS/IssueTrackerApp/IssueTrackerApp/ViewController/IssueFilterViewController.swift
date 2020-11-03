//
//  IssueFilterViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/03.
//

import UIKit

enum FilterSection {
  case main
}

enum FilterItem: String, CaseIterable {
  case open = "열린 이슈들"
  case your = "내가 작성한 이슈들"
  case assigned = "나한테 할당된 이슈들"
  case dat = "내가 댓글을 남긴 이슈들"
  case closed = "닫힌 이슈들"
}

class IssueFilterViewController: UIViewController {
  
  typealias DataSource = UITableViewDiffableDataSource<FilterSection, String>
  typealias Snapshot = NSDiffableDataSourceSnapshot<FilterSection, String>
  
  lazy var dataSource = makeDataSource()
  
  @IBOutlet weak var filterTableView: UITableView!
  @IBAction func cancelButtonTouched(_ sender: UIBarButtonItem) {
    dismiss(animated: true, completion: nil)
  }
  
  @IBAction func doneButtonTouched(_ sender: UIBarButtonItem) {
    dismiss(animated: true, completion: nil)
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    filterTableView.delegate = self
    applySnapshot()
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(tableView: filterTableView) { (tableView, indexPath, item) -> UITableViewCell? in
      guard let cell = tableView.dequeueReusableCell(withIdentifier: "IssueFilterCell", for: indexPath) as? FilterIssueCell else { return UITableViewCell() }
      cell.updateCell(withText: item)
      return cell
    }
    return dataSource
  }
  
  private func applySnapshot(animatingDifferences: Bool = true) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    let items = FilterItem.allCases.map { $0.rawValue }
    snapshot.appendItems(items)
    dataSource.apply(snapshot, animatingDifferences: animatingDifferences)
  }
  
}

extension IssueFilterViewController: UITableViewDelegate {
  func tableView(_ tableView: UITableView, heightForHeaderInSection section: Int) -> CGFloat {
      return 30
  }
  
  func tableView(_ tableView: UITableView, viewForHeaderInSection section: Int) -> UIView? {
    guard let header = tableView.dequeueReusableHeaderFooterView(withIdentifier: IssueFilterHeader.reuseIdentifier) as? IssueFilterHeader else { return nil }
    header.updateHeader(withText: "다음 중에 조건을 고르세요")
    return header
  }
  
  func tableView(_ tableView: UITableView, heightForFooterInSection section: Int) -> CGFloat {
      return CGFloat.leastNormalMagnitude
  }
  
  func tableView(_ tableView: UITableView, viewForFooterInSection section: Int) -> UIView? {
      return nil
  }
}
