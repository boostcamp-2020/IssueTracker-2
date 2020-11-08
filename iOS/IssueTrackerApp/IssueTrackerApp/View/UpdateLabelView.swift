//
//  UpdateLabelView.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import UIKit

protocol ButtonTouchDelegate: class {
  func closeButtonTouched(_ sender: UIButton)
  func resetButtonTouched(_ sender: UIButton, title: UITextField, description: UITextField)
  func colorRefreshButtonTouched(_ sender: UIButton, colorLabel: UILabel, colorPreview: UIView)
  func saveButtonTouched(_ sender: UIButton)
}

class UpdateLabelView: UIView {
  
  weak var delegate: ButtonTouchDelegate?

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
  }
  
  required init?(coder: NSCoder) {
    super.init(coder: coder)
    configure()
  }
  
  func configure() {
    layer.cornerRadius = 10
    let nib = UINib(nibName: "UpdateLabelView", bundle: Bundle.main)

    guard let xibView = nib.instantiate(withOwner: self, options: nil).first as? UIView else { return }
    xibView.layer.cornerRadius = 10
    xibView.frame = self.bounds
    xibView.autoresizingMask = [.flexibleWidth, .flexibleHeight]
    self.addSubview(xibView)
    
    colorPreview.layer.cornerRadius = 10
    textFieldConfigure()
  }
  
  private func textFieldConfigure() {
    titleTextField.layer.borderWidth = 0
    descriptionTextField.layer.borderWidth = 0
  }
}

