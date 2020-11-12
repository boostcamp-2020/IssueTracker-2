//
//  IssueLabelsViewController.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/10.
//

import UIKit

enum InnerLabelSection {
  case main
}

class IssueLabelsViewController: UIViewController {
  
  typealias DataSource = UICollectionViewDiffableDataSource<InnerLabelSection, String>
  typealias Snapshot = NSDiffableDataSourceSnapshot<InnerLabelSection, String>
  
  lazy var dataSource = makeDataSource()
  
  private var collectionView: UICollectionView!
  var contentHeight: CGFloat {
    return collectionView.contentSize.height
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
    reloadCollectionView()
  }
  
  func reloadCollectionView() {
    applySnapshot()
  }
  
  private func configure() {
    configureUI()
    configureCollectionView()
    configureLayout()
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: collectionView) { (collectionView, indexPath, item) -> UICollectionViewCell? in
      let cell: InnerLabelCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      
      cell.updateCell(withTitle: item)
      
      return cell
    }
    
    return dataSource
  }
  
  private func applySnapshot() {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    snapshot.appendItems(["a", "b", "c", "d", "e"])
    dataSource.apply(snapshot)
  }
}

// MARK:- UICollectionViewDelegateFlowLayout
extension IssueLabelsViewController: UICollectionViewDelegateFlowLayout {
  func collectionView(
    _ collectionView: UICollectionView,
    layout collectionViewLayout: UICollectionViewLayout,
    sizeForItemAt indexPath: IndexPath) -> CGSize {
    guard let item = dataSource.itemIdentifier(for: indexPath) else { return CGSize(width: 0, height: 0) }
    
    let text = item
    let estimatedSize = self.estimatedSize(
      text: text,
      font: .systemFont(ofSize: 13))
    let width = estimatedSize.width + 20
    let height = estimatedSize.height + 8
    return CGSize(width: width, height: height)
  }
  
  func collectionView(
    _ collectionView: UICollectionView,
    layout collectionViewLayout: UICollectionViewLayout,
    minimumLineSpacingForSectionAt section: Int) -> CGFloat {
    return 8.0
  }
  
  func collectionView(
    _ collectionView: UICollectionView,
    layout collectionViewLayout: UICollectionViewLayout,
    minimumInteritemSpacingForSectionAt section: Int) -> CGFloat {
    return 8.0
  }
  
  private func estimatedSize(text: String, font: UIFont) -> CGRect {
    let size = CGSize(width: 200, height: 200)
    let options = NSStringDrawingOptions.usesFontLeading.union(.usesLineFragmentOrigin)
    let estimatedSize = NSString(string: text)
      .boundingRect(
        with: size,
        options: options,
        attributes: [NSAttributedString.Key.font: font],
        context: nil)
    return estimatedSize
  }
}

// MARK:- Configuration
extension IssueLabelsViewController {
  private func configureCollectionView() {
    collectionView.delegate = self
  }
  
  private func configureUI() {
    collectionView = IssueLabelsCollectionView()
  }
  
  private func configureLayout() {
    view.addSubview(collectionView)
    //      collectionView.fillSuperview()
  }
}
