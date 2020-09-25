//
//  Car.swift
//  Classes and Objects
//
//  Created by Siddharth Kulkarni on 8/12/19.
//  Copyright © 2019 Siddharth Kulkarni. All rights reserved.
//

import Foundation // whole lot of code which allows us to do certain stuff

// creating an enum is basically like creating a datatype
enum CarType {
    case Sedan
    case Coupe
    case Hatchback
}



class Car {
    
    // add properties: variables inside a class are called properties
    var color = "Black"
    var numberOfSeats = 5
    var typeOfCar: CarType = .Coupe
    
    init(){ //designated initializer // makes sure all the properties of object have values
        
        
    }
    
    convenience init(customerChosenColor: String) { // convenience initializer
        self.init() // initializes a default copy of the object
        color = customerChosenColor

    }
    
    func drive(){
        print("Car is moving")
    }
}
