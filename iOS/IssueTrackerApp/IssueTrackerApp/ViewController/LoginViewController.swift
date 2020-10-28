//
//  ViewController.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/26.
//

import UIKit

class LoginViewController: UIViewController {
  
  var loginViewModel: LoginViewModelBinding
  
  @IBOutlet weak var idTextField: UITextField!
  @IBOutlet weak var pwTextField: UITextField!
  
  init?(coder: NSCoder, loginViewModel: LoginViewModelBinding) {
    self.loginViewModel = loginViewModel
    super.init(coder: coder)
  }
  
  required init?(coder: NSCoder) {
    fatalError("You can implement with only code.")
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    addingTarget()
    binding()
  }
  
  private func addingTarget() {
    idTextField.addTarget(self, action: #selector(editIdTextField), for: .editingChanged)
    pwTextField.addTarget(self, action: #selector(editPwTextField), for: .editingChanged)
  }
  
  private func binding() {
    bindIdTextField()
    bindPwTextField()
  }
  
  private func bindIdTextField() {
    loginViewModel.bindId { [weak self] isValid in
      DispatchQueue.main.async {
        self?.idTextField.layer.borderColor = isValid ? UIColor.systemGreen.cgColor : UIColor.systemRed.cgColor
      }
    }
  }
  
  private func bindPwTextField() {
    loginViewModel.bindPw { [weak self] isValid in
      DispatchQueue.main.async {
        self?.pwTextField.layer.borderColor = isValid ? UIColor.systemGreen.cgColor : UIColor.systemRed.cgColor
      }
    }
  }
  
  @objc private func editIdTextField() {
    guard let id = idTextField.text else { return }
    loginViewModel.isValid(id: id)
  }
  
  @objc private func editPwTextField() {
    guard let pw = pwTextField.text else { return }
    loginViewModel.isValid(pw: pw)
  }
}

