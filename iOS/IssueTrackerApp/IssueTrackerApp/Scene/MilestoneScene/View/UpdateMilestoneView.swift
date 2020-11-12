//
//  UpdateMilestoneView.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/09.
//

import UIKit

protocol UpdateMilestoneViewDelegate: class {
  func closeButtonTouched(_ sender: UIButton)
  func resetButtonTouched(_ sender: UIButton, title: UITextField, description: UITextField)
  func saveButtonTouched(withMilestone milestone: Milestone)
}

class UpdateMilestoneView: UIView {
  
  weak var delegate: UpdateMilestoneViewDelegate?
  private var milestone: Milestone?
  
  private var endDate = Date()
  
  @IBOutlet weak var titleLabel: UITextField!
  @IBOutlet weak var descriptionLabel: UITextField!
  @IBOutlet weak var saveButton: UIButton!
  @IBOutlet weak var datePickerView: UIDatePicker!
  
  @IBAction func dateValueChanged(_ sender: UIDatePicker) {
    self.endDate = sender.date
  }
  
  @IBAction func closeButtonTouched(_ sender: UIButton) {
    delegate?.closeButtonTouched(sender)
  }
  
  @IBAction func resetButtonTouched(_ sender: UIButton) {
    delegate?.resetButtonTouched(sender, title: titleLabel, description: descriptionLabel)
  }
  
  @IBAction func saveButtonTouched(_ sender: UIButton) {
    guard let title = titleLabel.text,
          var milestone = milestone else { return }
    let dateformatter = DateFormatter()
    dateformatter.dateFormat = "yyyy-MM-dd"
    let endDateAsString = dateformatter.string(from: endDate)
    let description = descriptionLabel.text
    milestone.milestoneName = title
    milestone.milestoneDescription = description
    milestone.endDate = endDateAsString
    delegate?.saveButtonTouched(withMilestone: milestone)
  }
  
  override func awakeFromNib() {
    super.awakeFromNib()
    configure()
  }
  
  func configure() {
    layer.cornerRadius = 10
    frame = CGRect(x: 0, y: 0, width: 350, height: 384)
    datePickerView.minimumDate = Date()
  }
  
  func setMilestone(milestone: Milestone) {
    self.milestone = milestone
  }
}
