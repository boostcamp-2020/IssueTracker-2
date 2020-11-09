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
  var milestoneData: [Milestone] = [] {
    willSet {
      DispatchQueue.main.async { [weak self] in
        self?.applySnapshot(withItem: newValue)
      }
    }
  }
  
  lazy var addButton: UIBarButtonItem = {
    let button = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(addButtonTouched))
    return button
  }()
  
  
  @IBOutlet weak var milestoneCollectionView: UICollectionView!
  @IBOutlet weak var blurView: UIVisualEffectView!
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
    
  }
  
  override func viewWillAppear(_ animated: Bool) {
    super.viewWillAppear(animated)
    loadMilestoneData()
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
  }
  
  private func loadMilestoneData() {
    let apiService = APIService()
    let endPoint = MilestoneEndPoint.getMilestones.endPoint
    apiService.requestMilestone(forEndPoint: endPoint) { [weak self] (data, response, error) in
      let decoder = JSONDecoder()
      decoder.keyDecodingStrategy = .convertFromSnakeCase
      guard let data = data else { return }
      guard let result = try? decoder.decode(MilestoneResponse.self, from: data) else { return }
      self?.milestoneData = result.milestonesInfo.milestoneArray
    }
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
  
  private func applySnapshot(withItem item: [Milestone]) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    snapshot.appendItems(item)
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

extension MilestoneViewController: UpdateMilestoneViewDelegate {
  func closeButtonTouched(_ sender: UIButton) {
    dismissUpdateLabelView()
  }
  
  func resetButtonTouched(_ sender: UIButton, title: UITextField, description: UITextField) {
    title.text = ""
    description.text = ""
  }
  
  func saveButtonTouched(withTitle title: String, description: String?, endDate: String) {
    dismissUpdateLabelView()
    let milestone = Milestone(milestoneName: title, milestoneDescription: description, endDate: endDate)
    let apiService = APIService()
    let endPoint = MilestoneEndPoint.postMilestone(milestone: milestone).endPoint
    apiService.requestMilestone(forEndPoint: endPoint) { [weak self] (data, response, error) in
      self?.loadMilestoneData()
    }
  }
}
