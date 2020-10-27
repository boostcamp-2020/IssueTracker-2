//
//  LoginViewModel.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/10/27.
//

import Foundation

protocol LoginViewModelBinding {
  func bindId(withHandler handler: @escaping (Bool) -> ())
  func bindPw(withHandler handler: @escaping (Bool) -> ())
  func isValid(id: String)
  func isValid(pw: String)
}

class LoginViewModel: LoginViewModelBinding {
  var loginValidator: LoginValidatable
  
  var idHandler: ((Bool) -> ())?
  var pwHandler: ((Bool) -> ())?
  
  init(loginValidator: LoginValidatable) {
    self.loginValidator = loginValidator
  }
  
  func bindId(withHandler handler: @escaping (Bool) -> ()) {
    idHandler = handler
  }
  
  func bindPw(withHandler handler: @escaping (Bool) -> ()) {
    pwHandler = handler
  }
  
  func isValid(id: String) {
    idHandler?(loginValidator.isValid(id: id))
  }
  
  func isValid(pw: String) {
    pwHandler?(loginValidator.isValid(pw: pw))
  }
}
