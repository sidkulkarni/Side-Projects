//
//  selfDrivingCar.swift
//  Classes and Objects
//
//  Created by Siddharth Kulkarni on 8/12/19.
//  Copyright © 2019 Siddharth Kulkarni. All rights reserved.
//

import Foundation

class selfDrivingCar : Car {

    var destination : String?// unique property to the self-driving class
    // ? stands for optional [may or may not be a null value]
    
    
    override func drive() { // overriding the drive function
        super.drive()
        
//        if destination != nil{ // safe way to do it
//            print("driving towards " + destination!)
//        }
        
// swift way to do it:
        if let userSetDestination = destination {
            print("driving towards " + userSetDestination)
        }
        
        
//varName! => stands for this varName is never going to be a Null Value
    // this way is called as optional binding.
    }
}
