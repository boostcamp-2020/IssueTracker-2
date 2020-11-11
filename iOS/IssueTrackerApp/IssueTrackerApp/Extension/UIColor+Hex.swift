//
//  UIColor+Hex.swift
//  IssueTrackerApp
//
//  Created by 송주 on 2020/11/08.
//

import UIKit

extension UIColor {
  convenience init(hex: String) {
    let hex = hex.trimmingCharacters(in: CharacterSet.alphanumerics.inverted)
    var int = UInt64()
    Scanner(string: hex).scanHexInt64(&int)
    let a, r, g, b: UInt64
    switch hex.count {
    case 3:
      (a, r, g, b) = (255, (int >> 8) * 17, (int >> 4 & 0xF) * 17, (int & 0xF) * 17)
    case 6:
      (a, r, g, b) = (255, int >> 16, int >> 8 & 0xFF, int & 0xFF)
    case 8:
      (a, r, g, b) = (int >> 24, int >> 16 & 0xFF, int >> 8 & 0xFF, int & 0xFF)
    default:
      (a, r, g, b) = (255, 0, 0, 0)
    }
    self.init(red: CGFloat(r) / 255, green: CGFloat(g) / 255, blue: CGFloat(b) / 255, alpha: CGFloat(a) / 255)
  }
  
  static var random: UIColor {
    return UIColor(red: .random(in: 0...1),
                   green: .random(in: 0...1),
                   blue: .random(in: 0...1),
                   alpha: 1.0)
  }
  
  func toHexString() -> String {
    var r:CGFloat = 0
    var g:CGFloat = 0
    var b:CGFloat = 0
    var a:CGFloat = 0
    
    getRed(&r, green: &g, blue: &b, alpha: &a)
    
    let rgb:Int = (Int)(r*255)<<16 | (Int)(g*255)<<8 | (Int)(b*255)<<0
    
    return NSString(format:"#%06x", rgb) as String
  }
  
  func isDark() -> Bool {
    var red: CGFloat { return CIColor(color: self).red }
    var blue: CGFloat { return CIColor(color: self).blue}
    var green: CGFloat { return CIColor(color: self).green}
    let yiq = ((red * 299) + (green * 587) + (blue * blue))
    
    return yiq < 150 ? true : false
  }
}
