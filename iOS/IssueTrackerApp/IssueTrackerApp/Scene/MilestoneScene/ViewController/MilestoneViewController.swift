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
  private var dummyList = DummyList()
  private var dummyMilestoneUpdateId: Int = 0
  
  var isMilestoneUpdating: Bool = false
  
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
    registerForKeyboardNotifications()
    loadMilestoneData()
  }
  
  override func viewWillDisappear(_ animated: Bool) {
    unregisterForKeyboardNotifications()
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
  
  func registerForKeyboardNotifications() {
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillShow), name: UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillHide), name: UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  func unregisterForKeyboardNotifications() {
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  private func loadMilestoneData() {
    let apiService = APIService()
    let endPoint = MilestoneEndPoint.getMilestones.endPoint
    apiService.requestMilestone(forEndPoint: endPoint) { [weak self] (data, response, error) in
      guard let self = self else { return }
      if let res = response as? HTTPURLResponse {
        if res.statusCode == 202 {
          let decoder = JSONDecoder()
          decoder.keyDecodingStrategy = .convertFromSnakeCase
          guard let data = data else { return }
          guard let result = try? decoder.decode(MilestoneResponse.self, from: data) else { return }
          self.milestoneData = result.milestonesInfo.milestoneArray
        } else {
          self.milestoneData = self.dummyList.dummyMilestones
        }
      }
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
  
  private func dismissUpdateMilestoneView() {
    DispatchQueue.main.async { [weak self] in
      self?.blurView.isHidden.toggle()
      self?.view.subviews.last?.removeFromSuperview()
    }
  }
  
  @objc private func addButtonTouched() {
    addButton.isEnabled = false
    if let nib = Bundle.main.loadNibNamed("UpdateMilestoneView", owner: self),
       let nibView = nib.first as? UpdateMilestoneView {
      self.view.addSubview(nibView)
      
      nibView.translatesAutoresizingMaskIntoConstraints = false
      NSLayoutConstraint.activate([
        nibView.heightAnchor.constraint(equalToConstant: 310),
        nibView.widthAnchor.constraint(equalTo: view.widthAnchor, multiplier: 0.85),
        nibView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
        nibView.centerYAnchor.constraint(equalTo: view.centerYAnchor)
      ])
      nibView.delegate = self
    }
    
    blurView.effect = UIBlurEffect(style: .dark)
    blurView.frame = self.view.bounds
    self.blurView.isHidden.toggle()
  }
  
  @objc func keyboardWillShow(note: NSNotification) {
    if let keyboardSize = (note.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue)?.cgRectValue,
       let updateMilestoneView = view.subviews.last as? UpdateMilestoneView {
      UIView.animate(withDuration: 0.3, animations: {
        updateMilestoneView.transform = CGAffineTransform(translationX: 0, y: -keyboardSize.height / 3)
      })
    }
  }
  
  @objc func keyboardWillHide(note: NSNotification) {
    if let updateMilestoneView = view.subviews.last as? UpdateMilestoneView {
      UIView.animate(withDuration: 0.3, animations: {
        updateMilestoneView.transform = .identity
      })
    }
  }
}

extension MilestoneViewController: UICollectionViewDelegateFlowLayout {
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return CGSize(width: view.frame.width, height: 100)
  }
  
  func collectionView(_ collectionView: UICollectionView, didSelectItemAt indexPath: IndexPath) {
    guard let milestone = dataSource.itemIdentifier(for: indexPath) else { return }
    dummyMilestoneUpdateId = milestone.id
    
    addButton.isEnabled = false
    isMilestoneUpdating = true
    if let nib = Bundle.main.loadNibNamed("UpdateMilestoneView", owner: self),
       let nibView = nib.first as? UpdateMilestoneView {
      nibView.titleLabel.text = milestone.milestoneName
      nibView.descriptionLabel.text = milestone.milestoneDescription
      nibView.setMilestone(milestone: milestone)
      self.view.addSubview(nibView)
      
      nibView.translatesAutoresizingMaskIntoConstraints = false
      NSLayoutConstraint.activate([
        nibView.heightAnchor.constraint(equalToConstant: 310),
        nibView.widthAnchor.constraint(equalTo: view.widthAnchor, multiplier: 0.85),
        nibView.centerXAnchor.constraint(equalTo: view.centerXAnchor),
        nibView.centerYAnchor.constraint(equalTo: view.centerYAnchor)
      ])
      nibView.delegate = self
    }
    
    blurView.effect = UIBlurEffect(style: .dark)
    blurView.frame = self.view.bounds
    self.blurView.isHidden.toggle()
  }}

extension MilestoneViewController: UpdateMilestoneViewDelegate {
  func closeButtonTouched(_ sender: UIButton) {
    AlertFactory.shared.makeActionSheet(viewControllerToPresent: self) { [weak self] in
      self?.dismissUpdateMilestoneView()
      self?.addButton.isEnabled = true
    }
  }
  
  func resetButtonTouched(_ sender: UIButton, title: UITextField, description: UITextField) {
    title.text = ""
    description.text = ""
  }
  
  func saveButtonTouched(withMilestone milestone: Milestone) {
    let dummyMilestoneId = UserDefaults.standard.integer(forKey: "milestoneId")
    let apiService = APIService()
    let newMilestone = Milestone(id: dummyMilestoneId, milestoneName: milestone.milestoneName, milestoneDescription: milestone.milestoneDescription, endDate: milestone.endDate, status: milestone.status, openCount: milestone.openCount, closeCount: milestone.closeCount)
    
    let endPoint: EndPoint<Milestone>
    switch isMilestoneUpdating {
    case true:
      endPoint = MilestoneEndPoint.updateMilestone(milestone: newMilestone).endPoint
    default:
      endPoint = MilestoneEndPoint.postMilestone(milestone: newMilestone).endPoint
    }
    apiService.requestMilestone(forEndPoint: endPoint) { [weak self] (data, response, error) in
<<<<<<< HEAD
      guard let self = self,
            let res = response as? HTTPURLResponse else { return }
      if res.statusCode != 202 {
        for index in 0..<self.dummyList.dummyMilestones.count {
          if self.dummyList.dummyMilestones[index].id == self.dummyMilestoneUpdateId {
            self.dummyList.dummyMilestones[index].milestoneName = newMilestone.milestoneName
            self.dummyList.dummyMilestones[index].milestoneDescription = newMilestone.milestoneDescription
            self.dummyList.dummyMilestones[index].endDate = newMilestone.endDate
          }
        }
      }
      
      self.loadMilestoneData()
      DispatchQueue.main.async {
        self.addButton.isEnabled = true
        self.isMilestoneUpdating = false
        self.dismissUpdateMilestoneView()
      }
    }
  }
}
