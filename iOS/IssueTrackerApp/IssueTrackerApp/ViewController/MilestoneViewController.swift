//
//  MilestoneViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import UIKit

class MilestoneViewController: UIViewController {
  
  typealias DataSource = UICollectionViewDiffableDataSource<MilestoneSection, Milestone>
  typealias Snapshot = NSDiffableDataSourceSnapshot<MilestoneSection, Milestone>
  
  lazy var dataSource = makeDataSource()
  lazy var milestoneData: [Milestone] = {
    var datas = [Milestone]()
    let apiServie = APIService()
    let endPoint = MilestoneEndPoint.getMilestones.endPoint
    apiServie.requestMilestone(forEndPoint: endPoint) { (data, response, error) in
      guard let res = response as? HTTPURLResponse else { return }
      print(res.statusCode)
      let decoder = JSONDecoder()
      let a = try? decoder.decode([Milestone].self, from: data!)
      print(String(data: data!, encoding: .utf8))
      
    }
    return datas
  }()
  
  lazy var addButton: UIBarButtonItem = {
    let button = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(addButtonTouched))
    return button
  }()
  
  
  @IBOutlet weak var milestoneCollectionView: UICollectionView!
  
  override func viewDidLoad() {
    super.viewDidLoad()
    title = "마일스톤"
    configure()
    applySnapshot()
  }
  
  private func configure() {
    configureNavigationBar()
    configureMilestoneCollectionView()
  }
  
  private func configureNavigationBar() {
    navigationItem.rightBarButtonItem = addButton
    navigationController?.navigationBar.prefersLargeTitles = true
    navigationController?.navigationBar.sizeToFit()
  }
  
  private func configureMilestoneCollectionView() {
    milestoneCollectionView.register(MilestoneCell.self)
    milestoneCollectionView.delegate = self
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: milestoneCollectionView) { (collectionView, indexPath, item) -> UICollectionViewCell? in
      let cell: MilestoneCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      
      cell.ubdateCell(withItem: item)
      
      return cell
    }
    
    return dataSource
  }
  
  private func applySnapshot() {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    snapshot.appendItems(
      [
        Milestone(id: 0, milestoneName: "마일스톤 0", milestoneDescription: "0번째 마일스톤", endDate: "2020-11-09", status: 0, openCount: 5, closeCount: 3),
        Milestone(id: 1, milestoneName: "마일스톤 1", milestoneDescription: "1번째 마일스톤", endDate: "2020-11-09", status: 0, openCount: 12, closeCount: 4),
        Milestone(id: 2, milestoneName: "마일스톤 2", milestoneDescription: "2번째 마일스톤", endDate: "2020-11-09", status: 0, openCount: 2, closeCount: 3),
        Milestone(id: 3, milestoneName: "마일스톤 3", milestoneDescription: "3번째 마일스톤", endDate: "2020-11-09", status: 0, openCount: 17, closeCount: 34),
      ])
    dataSource.apply(snapshot, animatingDifferences: true)
  }
  
  @objc private func addButtonTouched() {
    
  }
}

extension MilestoneViewController: UICollectionViewDelegateFlowLayout {
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return CGSize(width: view.frame.width, height: 100)
  }
}
