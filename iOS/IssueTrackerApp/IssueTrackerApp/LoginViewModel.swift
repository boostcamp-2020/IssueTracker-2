//
//  LoginViewModel.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/10/27.
//

import Foundation

protocol LoginViewModelBinding {
    func bindId(withHandler handler: @escaping (Bool) -> ())
    func bindPw(withHandler handler: @escaping () -> ())
    func isValid(id: String)
}

class LoginViewModel: LoginViewModelBinding {
    var loginValidator: LoginValidatable
    
    var idHandler: ((Bool) -> ())?
    var pwHandler: (() -> ())?
    
    init(loginValidator: LoginValidatable) {
        self.loginValidator = loginValidator
    }
    
    func bindId(withHandler handler: @escaping (Bool) -> ()) {
        idHandler = handler
    }
    
    func bindPw(withHandler handler: @escaping () -> ()) {
        pwHandler = handler
    }
    
    func isValid(id: String) {
        idHandler?(loginValidator.isValid(id: id))
    }
}
