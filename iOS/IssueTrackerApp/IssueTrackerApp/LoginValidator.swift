//
//  LoginValidator.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/10/27.
//

import Foundation

protocol LoginValidatable {
    func isValid(id: String) -> Bool
    func isValid(password: String) -> Bool
}

class LoginValidator: LoginValidatable {
    
    func isValid(id: String) -> Bool {
        return 6...16 ~= id.count
    }
    
    func isValid(password: String) -> Bool {
        return 6...12 ~= password.count
    }
}
