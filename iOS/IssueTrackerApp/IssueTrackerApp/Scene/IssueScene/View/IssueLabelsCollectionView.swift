//
//  IssueLabelsCollectionView.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/10.
//

import UIKit

class IssueLabelsCollectionView: UICollectionView {
  
  override init(frame: CGRect, collectionViewLayout layout: UICollectionViewLayout) {
    super.init(frame: frame, collectionViewLayout: LeftAlignedCollectionViewFlowLayout())
    configure()
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configure()
  }
  
  private func configure() {
    backgroundColor = .tertiarySystemBackground
    isScrollEnabled = false
    registerCollectionViewCell()
  }
  
  private func registerCollectionViewCell() {
    register(InnerLabelCell.self)
  }
}

