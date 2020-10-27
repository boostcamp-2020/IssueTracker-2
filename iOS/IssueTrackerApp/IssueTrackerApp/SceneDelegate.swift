//
//  SceneDelegate.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/26.
//

import UIKit

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
  
  var window: UIWindow?
  var token: String? = nil
  
  
  func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
    guard let _ = (scene as? UIWindowScene) else { return }
    
    let storyboard = UIStoryboard(name: "Main", bundle: nil)
    guard let _ = token else {
      let loginVC = storyboard.instantiateViewController(identifier: "LoginViewController") { (coder) -> LoginViewController? in
        let loginValidator = LoginValidator()
        let loginViewModel = LoginViewModel(loginValidator: loginValidator)
        return LoginViewController(coder: coder, loginViewModel: loginViewModel)
      }
      window?.rootViewController = loginVC
      window?.makeKeyAndVisible()
      return
    }
    // TODO: - 이슈 vc를 rootVC 로 만드는 작업
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

