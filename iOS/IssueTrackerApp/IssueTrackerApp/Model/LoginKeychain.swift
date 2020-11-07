//
//  LoginKeyChain.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/11/07.
//

import Foundation
import KeychainService

protocol Keychainable {
  func save(value: String, forKey key: String)
  func remove(forKey key: String)
  func removeAll()
  func getValue(forKey key: String) -> String?
}

class LoginKeychain: Keychainable {
  private var secureStore: SecureStore {
    get {
      let queryable = GenericPasswordQueryable(service: "IssueTracker")
      
      return SecureStore(secureStoreQueryable: queryable)
    }
  }
  
  func save(value: String, forKey key: String) {
    try? secureStore.setValue(value, for: key)
  }
  
  func remove(forKey key: String) {
    try? secureStore.removeValue(for: key)
  }
  
  func removeAll() {
    try? secureStore.removeAllValues()
  }
  
  func getValue(forKey key: String) -> String? {
    let value = try? secureStore.getValue(for: key)
    return value
  }
  
}
