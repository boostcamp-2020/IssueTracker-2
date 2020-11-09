//
//  UpdateLabelView.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import UIKit

protocol UpdateLabelViewDelegate: class {
  func closeButtonTouched(_ sender: UIButton)
  func resetButtonTouched(_ sender: UIButton, title: UITextField, description: UITextField)
  func colorRefreshButtonTouched(_ sender: UIButton, colorLabel: UILabel, colorPreview: UIView)
  func saveButtonTouched(_ sender: UIButton)
}

class UpdateLabelView: UIView {
  
  weak var delegate: UpdateLabelViewDelegate?
  
  @IBOutlet weak var titleTextField: UITextField!
  @IBOutlet weak var descriptionTextField: UITextField!
  @IBOutlet weak var colorHexLabel: UILabel!
  @IBOutlet weak var colorPreview: UIView!
  
  @IBAction func resetButtonTouched(_ sender: UIButton) {
    delegate?.resetButtonTouched(sender, title: titleTextField, description: descriptionTextField)
  }
  
  @IBAction func closeButtonTouched(_ sender: UIButton) {
    delegate?.closeButtonTouched(sender)
  }
  
  @IBAction func colorRefreshButtonTouched(_ sender: UIButton) {
    delegate?.colorRefreshButtonTouched(sender, colorLabel: colorHexLabel, colorPreview: colorPreview)
  }
  
  @IBAction func saveButtonTouched(_ sender: UIButton) {
    delegate?.saveButtonTouched(sender)
  }
  
  override func awakeFromNib() {
    super.awakeFromNib()
    configure()
  }
  
  func configure() {
    layer.cornerRadius = 10
    frame = CGRect(x: 0, y: 0, width: 350, height: 384)
    
    colorPreview.layer.cornerRadius = 10
  }
}

