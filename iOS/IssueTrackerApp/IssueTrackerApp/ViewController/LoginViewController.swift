//
//  ViewController.swift
//  IssueTrackerApp
//
//  Created by 서명렬 on 2020/10/26.
//

import UIKit
import AuthenticationServices
import KeychainService

class LoginViewController: UIViewController {
  
  var loginViewModel: LoginViewModelBinding
  
  @IBOutlet weak var idTextField: UITextField!
  @IBOutlet weak var pwTextField: UITextField!
  @IBOutlet weak var githubSignInButton: SignInButton!
  
  lazy var appleSignInButton: ASAuthorizationAppleIDButton = {
    let button = ASAuthorizationAppleIDButton()
    return button
  }()
  
  init?(coder: NSCoder, loginViewModel: LoginViewModelBinding) {
    self.loginViewModel = loginViewModel
    super.init(coder: coder)
  }
  
  required init?(coder: NSCoder) {
    fatalError("You can implement with only code.")
  }
  
  override func viewDidLoad() {
    super.viewDidLoad()
    configure()
  }
  
  private func configure() {
    configureAppleSignInButton()
    addingTarget()
    binding()
  }
  
  private func configureAppleSignInButton() {
    view.addSubview(appleSignInButton)
    appleSignInButton.translatesAutoresizingMaskIntoConstraints = false
    
    NSLayoutConstraint.activate([
      appleSignInButton.topAnchor.constraint(equalTo: githubSignInButton.bottomAnchor, constant: 18),
      appleSignInButton.leadingAnchor.constraint(equalTo: githubSignInButton.leadingAnchor),
      appleSignInButton.trailingAnchor.constraint(equalTo: githubSignInButton.trailingAnchor),
      appleSignInButton.heightAnchor.constraint(equalToConstant: 44)
    ])
  }
  
  private func addingTarget() {
    idTextField.addTarget(self, action: #selector(editIdTextField), for: .editingChanged)
    pwTextField.addTarget(self, action: #selector(editPwTextField), for: .editingChanged)
    appleSignInButton.addTarget(self, action: #selector(appleSignInButtonTouched), for: .touchUpInside)
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
  
  @objc private func appleSignInButtonTouched() {
    let appleIDProvider = ASAuthorizationAppleIDProvider()
    let request = appleIDProvider.createRequest()
    request.requestedScopes = [.fullName, .email]
    
    let authorizationController = ASAuthorizationController(authorizationRequests: [request])
    authorizationController.delegate = self
    authorizationController.presentationContextProvider = self
    authorizationController.performRequests()
  }
}

extension LoginViewController: ASAuthorizationControllerDelegate {
  func authorizationController(controller: ASAuthorizationController, didCompleteWithAuthorization authorization: ASAuthorization) {
    if let appleIDCredential = authorization.credential as? ASAuthorizationAppleIDCredential {
      guard let appleIDToken = appleIDCredential.identityToken else {
        print("Unable to fetch identity token")
        return
      }
      
      guard let idTokenString = String(data: appleIDToken, encoding: .utf8) else {
        print("Unable to serialize token string from data: \(appleIDToken.debugDescription)")
        return
      }
      let queryable = GenericPasswordQueryable(service: "IssueTracker")
      let secureStore = SecureStore(secureStoreQueryable: queryable)
      
      let userIdentifier = appleIDCredential.user
//      let fullName = appleIDCredential.fullName
//      let email = appleIDCredential.email
      
      try? secureStore.setValue(userIdentifier, for: "userIdentifier")
      
      let storyboard = UIStoryboard(name: "Issue", bundle: nil)
      let issueVC = storyboard.instantiateInitialViewController()
      
      guard let window = view.window else { return }
      
      window.rootViewController = issueVC
    }
  }
  
  func authorizationController(controller: ASAuthorizationController, didCompleteWithError error: Error) {
  }
}

extension LoginViewController: ASAuthorizationControllerPresentationContextProviding {
  func presentationAnchor(for controller: ASAuthorizationController) -> ASPresentationAnchor {
    guard let window = view.window else { return ASPresentationAnchor() }
    return window
  }
}
