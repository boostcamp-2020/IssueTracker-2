//
//  IssueCell.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/08.
//

import UIKit

enum InnerLabelSection {
  case main
}

class IssueCell: UICollectionViewCell, Reusable, NibLoadable {
  
  typealias DataSource = UICollectionViewDiffableDataSource<InnerLabelSection, Label>
  typealias Snapshot = NSDiffableDataSourceSnapshot<InnerLabelSection, Label>
  
  private lazy var dataSource = makeDataSource()
  private var labelData: [Label] = [] {
    willSet {
      applySnapshot(withLabels: newValue)
    }
  }
  
  @IBOutlet weak var titleLabel: UILabel!
  @IBOutlet weak var milestoneLabel: MilestoneMarkLabel!
  @IBOutlet weak var innerLabelCollectionView: UICollectionView!
  @IBOutlet weak var bigView: UIView!
  @IBOutlet weak var checkmarkImageView: UIImageView!
  @IBOutlet weak var closeLabel: UILabel!
  
  override var isSelected: Bool {
    didSet {
      checkmarkImageView.image = isSelected == true ? UIImage(systemName: "checkmark.circle")! : UIImage(systemName: "circle")!
    }
  }
  
  override func awakeFromNib() {
    super.awakeFromNib()
    configure()
    innerLabelCollectionView.collectionViewLayout = LeftAlignedCollectionViewFlowLayout()
    innerLabelCollectionView.register(InnerLabelCell.self)
  }
  
  override func prepareForReuse() {
    labelData = []
    checkmarkImageView.image = UIImage(systemName: "circle")!
  }

  private func configure() {
    layer.borderWidth = 0.25
    layer.borderColor = UIColor.lightGray.cgColor
    innerLabelCollectionView.delegate = self
    configureContentView()
  }
  
  private func configureContentView() {
  }
  
  private func makeDataSource() -> DataSource {
    let dataSource = DataSource(collectionView: innerLabelCollectionView) { (collectionView, indexPath, item) -> UICollectionViewCell? in
      let cell: InnerLabelCell = collectionView.dequeueReusableCell(forIndexPath: indexPath)
      
      cell.updateCell(withLabel: item)
      
      return cell
    }
    
    return dataSource
  }
  
  private func applySnapshot(withLabels labels: [Label]) {
    var snapshot = Snapshot()
    snapshot.appendSections([.main])
    snapshot.appendItems(labels)
    dataSource.apply(snapshot)
  }
  
  func updateCell(withItem item: Issue) {
    titleLabel.text = item.issueName
    milestoneLabel.text = item.milestone?.milestoneName
    if let labels = item.label {
      labelData = labels
    }
  }
  
  func editHiddenCell(status: Bool) {
    if status {
      self.bigView.transform = CGAffineTransform(translationX: 50, y: 0)
    } else {
      self.bigView.transform = .identity
    }
  }
  
  func editCurrentCell(status: Bool) {
    if status {
      UIView.animate(withDuration: 0.4) {
        self.bigView.transform = CGAffineTransform(translationX: 50, y: 0)
      }
    } else {
      UIView.animate(withDuration: 0.4) {
        self.bigView.transform = .identity
      }
    }
  }
}

class LeftAlignedCollectionViewFlowLayout: UICollectionViewFlowLayout {
  override func layoutAttributesForElements(
    in rect: CGRect) -> [UICollectionViewLayoutAttributes]? {
    let attributes = super.layoutAttributesForElements(in: rect)
    var leftMargin = sectionInset.left
    var maxY: CGFloat = -1.0
    attributes?.forEach { layoutAttribute in
      if layoutAttribute.frame.origin.y >= maxY {
        leftMargin = sectionInset.left
      }
      
      layoutAttribute.frame.origin.x = leftMargin
      
      leftMargin += layoutAttribute.frame.width + minimumInteritemSpacing
      maxY = max(layoutAttribute.frame.maxY , maxY)
    }
    return attributes
  }
}

extension IssueCell: UICollectionViewDelegateFlowLayout {
  func collectionView(_ collectionView: UICollectionView, layout collectionViewLayout: UICollectionViewLayout, sizeForItemAt indexPath: IndexPath) -> CGSize {
    let label = UILabel(frame: CGRect.zero)
    guard let item = dataSource.itemIdentifier(for: indexPath) else { return CGSize.zero }
    label.text = " \(item.labelName) "
    label.sizeToFit()
    return label.bounds.size
  }
}
