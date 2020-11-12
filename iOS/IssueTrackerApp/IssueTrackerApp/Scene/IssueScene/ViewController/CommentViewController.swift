//
//  CommentViewController.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/11.
//

import UIKit

class CommentViewController: UIViewController {
  
  @IBOutlet weak var commentTextView: UITextView!
  @IBOutlet weak var bottomConstraint: NSLayoutConstraint!
  
  override func viewDidLoad() {
    super.viewDidLoad()
  }
  
  override func viewWillAppear(_ animated: Bool) {
    registerForKeyboardNotifications()
  }
  
  override func viewWillDisappear(_ animated: Bool) {
    unregisterForKeyboardNotifications()
  }
  
  override func touchesBegan(_ touches: Set<UITouch>, with event: UIEvent?) {
    self.view.endEditing(true)
  }
  
  private func registerForKeyboardNotifications() {
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillShow), name: UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.addObserver(self, selector:#selector(keyboardWillHide), name: UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  private func unregisterForKeyboardNotifications() {
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillShowNotification, object: nil)
    NotificationCenter.default.removeObserver(self, name:UIResponder.keyboardWillHideNotification, object: nil)
  }
  
  @objc func keyboardWillShow(note: NSNotification) {
    if let keyboardSize = (note.userInfo?[UIResponder.keyboardFrameEndUserInfoKey] as? NSValue)?.cgRectValue {
      UIView.animate(withDuration: 0.3, animations: {
        DispatchQueue.main.async {
          self.bottomConstraint.constant = keyboardSize.height - CGFloat(20)
        }
      })
    }
  }
  
  @objc func keyboardWillHide(note: NSNotification) {
    UIView.animate(withDuration: 0.3, animations: {
      DispatchQueue.main.async {
        self.bottomConstraint.constant = 0
      }
    })
  }
  
  @IBAction func cancelButtonTouched(_ sender: Any) {
    dismiss(animated: true, completion: nil)
  }
  
  @IBAction func saveButtonTouched(_ sender: Any) {
    dismiss(animated: true, completion: nil)
  }
}
