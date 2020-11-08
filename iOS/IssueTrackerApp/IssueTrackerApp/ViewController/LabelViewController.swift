//
//  LabelViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/07.
//

import UIKit

class LabelViewController: UIViewController {
  
  typealias DataSource = UICollectionViewDiffableDataSource<LabelSection, Label>
  typealias Snapshot = NSDiffableDataSourceSnapshot<LabelSection, Label>
  
  private lazy var dataSource = makeDataSource()
  
  @IBOutlet weak var labelCollectionView: UICollectionView!
  
  
  lazy var addButton: UIBarButtonItem = {
    let button = UIBarButtonItem(barButtonSystemItem: .add, target: self, action: #selector(self.addButtonTapped))
    return button
  }()
  
  override func viewDidLoad() {
    super.viewDidLoad()
    applySnapshot(animatingDifferences: false)
    configureNavigator()
  }
  
  private func configureNavigator() {
      self.navigationItem.rightBarButtonItem = self.addButton
      guard let navigationController = navigationController else { return }
      navigationController.navigationBar.prefersLargeTitles = true
      navigationController.navigationBar.topItem?.title = "레이블"
      navigationItem.largeTitleDisplayMode = .automatic
      navigationController.navigationBar.sizeToFit()
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: labelCollectionView) { (collectionView, indexPath, label) -> UICollectionViewCell? in
      guard let cell = collectionView.dequeueReusableCell(
        withReuseIdentifier: "LabelCell",
        for: indexPath
      ) as? LabelCell else {
        return UICollectionViewCell()
      }
      
      cell.updateCell(withTitle: label.labelName, description: label.labelDescription ?? "")
      return cell
    }
    
    return dataSource
  }
  
  private func applySnapshot(animatingDifferences: Bool = true) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    let labels = LabelList.dummyLabels
    let labelList = LabelList(labels: labels)
    snapshot.appendItems(labelList.labels)
    dataSource.apply(snapshot, animatingDifferences: animatingDifferences)
  }
  
  @objc func addButtonTapped() {
    print("안녕")
  }
}

extension LabelViewController: UICollectionViewDelegateFlowLayout {
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    return CGSize(width: view.bounds.width, height: 80)
  }
}
