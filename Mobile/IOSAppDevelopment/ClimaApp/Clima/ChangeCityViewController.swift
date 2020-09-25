//
//  ChangeCityViewController.swift
//  WeatherApp
//
//  Created by Angela Yu on 23/08/2015.
//  Copyright (c) 2015 London App Brewery. All rights reserved.
//

import UIKit

//Write the protocol declaration here:

//protocol is like a contract.
//we're saying that if you want to be the delegate, you have to be able to implement this method: userEnteredANewCityName
//i.e you have to be able to handle what should happen when you get sent a message that contains a city name that the user typed in to the changeCityViewController

//now that we've drawn up our contract: we have to declare a new property inside our changeCityViewController


//in order to take up this contract: the only requirement is that you must have this method in the body of your class.
protocol ChangeCityDelegate{
    func userEnteredANewCityName (city: String)
}
// the protocol is like a job contract/ contract for a builder to build the house.
//in order to take up the contract you must have certain qualifications



class ChangeCityViewController: UIViewController {
    
    //Declare the delegate variable here:
    //the role of the delegate can be filled or it can be unfilled [null]
    var delegate: ChangeCityDelegate?
    
    //This is the pre-linked IBOutlets to the text field:
    @IBOutlet weak var changeCityTextField: UITextField!

    
    //This is the IBAction that gets called when the user taps on the "Get Weather" button:
    @IBAction func getWeatherPressed(_ sender: AnyObject) {
        
        //1 Get the city name the user entered in the text field
        let cityName = changeCityTextField.text!
        
        //2 If we have a delegate set, call the method userEnteredANewCityName
        delegate?.userEnteredANewCityName(city: cityName)
        // optional Chaining/ Alternative to optional binding
        
        //3 dismiss the Change City View Controller to go back to the WeatherViewController
        self.dismiss(animated: true, completion: nil)
        
    }
    
    

    //This is the IBAction that gets called when the user taps the back button. It dismisses the ChangeCityViewController.
    @IBAction func backButtonPressed(_ sender: AnyObject) {
        self.dismiss(animated: true, completion: nil)
    }
    
}
