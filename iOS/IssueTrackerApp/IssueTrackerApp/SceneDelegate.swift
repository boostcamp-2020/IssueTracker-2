//
//  SceneDelegate.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/26.
//

import UIKit
import KeychainService

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
  
  var window: UIWindow?
  var loginKeyChain = LoginKeychain()
  
  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    guard let _ = (scene as? UIWindowScene) else { return }
    removeKeychain()
    
    guard let _ = checkKeychain() else {
      let loginVC = getLoginVC()
      switchScreen(with: loginVC)
      return
    }
    // TODO: - 이슈 vc를 rootVC 로 만드는 작업
  }
  
  private func getLoginVC() -> LoginViewController {
    let storyboard = UIStoryboard(name: "Login", bundle: nil)
    let loginVC = storyboard.instantiateViewController(identifier: "LoginViewController") { (coder) -> LoginViewController? in
      let loginValidator = LoginValidator()
      let loginViewModel = LoginViewModel(loginValidator: loginValidator)
      let loginKeychain = LoginKeychain()
      return LoginViewController(coder: coder, loginViewModel: loginViewModel, loginKeychain: loginKeychain)
    }
    return loginVC
  }
  
  private func switchScreen(with viewController: UIViewController) {
    window?.rootViewController = viewController
    window?.makeKeyAndVisible()
  }
  
  private func checkKeychain() -> String? {
    return loginKeyChain.getValue(forKey: "userIdentifier")
  }
  
  private func removeKeychain() {
    loginKeyChain.removeAll()
  }
  
  func sceneDidDisconnect(_ scene: UIScene) {
  }
  
  func sceneDidBecomeActive(_ scene: UIScene) {
  }
  
  func sceneWillResignActive(_ scene: UIScene) {
  }
  
  func sceneWillEnterForeground(_ scene: UIScene) {
  }
  
  func sceneDidEnterBackground(_ scene: UIScene) {
  }
  
  
}

