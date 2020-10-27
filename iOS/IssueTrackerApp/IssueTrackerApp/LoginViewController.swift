//
//  ViewController.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/26.
//

import UIKit

class LoginViewController: UIViewController {
    
    var loginViewModel: LoginViewModelBinding?
    
    @IBOutlet weak var idTextField: UITextField!
    @IBOutlet weak var pwTextField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        loginViewModel = LoginViewModel(loginValidator: LoginValidator())
        idTextField.addTarget(self, action: #selector(editIdTextField), for: .editingChanged)
        binding()
    }
    
    private func binding() {
        bindIdTextField()
        bindPwTextField()
    }
    
    private func bindIdTextField() {
        loginViewModel?.bindId { [weak self] isValid in
            DispatchQueue.main.async {
                self?.idTextField.layer.borderColor = isValid ? UIColor.green.cgColor : UIColor.red.cgColor
            }
        }
    }
    
    private func bindPwTextField() {
    }
    
    @objc private func editIdTextField() {
        guard let id = idTextField.text else { return }
        loginViewModel?.isValid(id: id)
    }
}

