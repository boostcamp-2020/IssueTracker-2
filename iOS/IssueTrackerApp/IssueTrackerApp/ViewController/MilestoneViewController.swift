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
    let apiService = APIService()
    let endPoint = MilestoneEndPoint.getMilestones.endPoint
    apiService.requestMilestone(forEndPoint: endPoint) { (data, response, error) in
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
  @IBOutlet weak var blurView: UIVisualEffectView!
  
  override func viewDidLoad() {
    super.viewDidLoad()
    // title = "마일스톤"
    configure()
    applySnapshot()
  }
  
  private func configure() {
    configureNavigationBar()
    configureMilestoneCollectionView()
  }
  
  private func configureNavigationBar() {
    self.navigationItem.rightBarButtonItem = self.addButton
    guard let navigationController = navigationController else { return }
    navigationController.navigationBar.prefersLargeTitles = true
    navigationController.navigationBar.topItem?.title = "마일스톤"
//     navigationItem.largeTitleDisplayMode = .automatic
//     navigationController.navigationBar.sizeToFit()
  }
  
  private func configureMilestoneCollectionView() {
    milestoneCollectionView.register(MilestoneCell.self)
    milestoneCollectionView.delegate = self
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: milestoneCollectionView) { (collectionView, indexPath, item) -> UICollectionViewCell? in
      let cell: MilestoneCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      
      cell.updateCell(withItem: item)
      
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
  
  private func dismissUpdateLabelView() {
    blurView.isHidden.toggle()
    view.subviews.last?.removeFromSuperview()
  }
  
  @objc private func addButtonTouched() {
    if let nib = Bundle.main.loadNibNamed("UpdateMilestoneView", owner: self),
       let nibView = nib.first as? UpdateMilestoneView {
      self.view.addSubview(nibView)
      
      nibView.translatesAutoresizingMaskIntoConstraints = false
      NSLayoutConstraint.activate([
        nibView.heightAnchor.constraint(equalToConstant: 384),
        nibView.widthAnchor.constraint(equalToConstant: 350),
        nibView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
        nibView.centerYAnchor.constraint(equalTo: view.centerYAnchor)
      ])
      nibView.delegate = self
    }
    
    blurView.effect = UIBlurEffect(style: .dark)
    blurView.frame = self.view.bounds
    self.blurView.isHidden.toggle()
  }
}

extension MilestoneViewController: UICollectionViewDelegateFlowLayout {
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return CGSize(width: view.frame.width, height: 100)
  }
}

extension MilestoneViewController: ButtonTouchDelegate2 {
  func closeButtonTouched(_ sender: UIButton) {
    dismissUpdateLabelView()
  }
  
  func resetButtonTouched(_ sender: UIButton, title: UITextField, description: UITextField) {
    title.text = ""
    description.text = ""
  }
  
  func saveButtonTouched(_ sender: UIButton) {
    dismissUpdateLabelView()
  }
  
  
}
