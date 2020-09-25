//
//  ViewController.swift
//  WeatherApp
//
//  Created by Angela Yu on 23/08/2015.
//  Copyright (c) 2015 London App Brewery. All rights reserved.
//

import UIKit
import CoreLocation //module that allows us to tap in gps functionality of iphone
import Alamofire //module that is going to help us make the http request
import SwiftyJSON // module that allows us to deal with JSON objects and extract the data from the weatherMap.

//our WeatherViewController is going to abide by the contract: ChangeCityDelegate (we/this class: is going to conform to the changeCityDelegate)
class WeatherViewController: UIViewController, CLLocationManagerDelegate, ChangeCityDelegate {
    
    //Constants
    let WEATHER_URL = "http://api.openweathermap.org/data/2.5/weather"
   // let APP_ID = "e72ca729af228beabd5d20e3b7749713"
    
    let APP_ID = "ccf014361f20655b72488e00e617a48b"

    /***Get your own App ID at https://openweathermap.org/appid ****/
    

    //TODO: Declare instance variables here
    
    // create a new locationManager object
    let locationManager = CLLocationManager()
    let weatherDataModel = WeatherDataModel()

    
    //Pre-linked IBOutlets
    @IBOutlet weak var weatherIcon: UIImageView!
    @IBOutlet weak var cityLabel: UILabel!
    @IBOutlet weak var temperatureLabel: UILabel!

    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        
        //TODO:Set up the location manager here.
        // trying to extract gps location.
        locationManager.delegate = self
        // we are setting the weatherViewController as the delegate of the location manager
        //we are saying we are responsible for managing the location data once the location manager has found it.
        
        locationManager.desiredAccuracy = kCLLocationAccuracyHundredMeters
        // in order to get a particular desired accuracy of the location manager.
        // for the purpose of weatherApp -> this is a good way!
        
        
        
        // this asks the user to get their permission to access their current location // this is going to be a pop up on the user interface.
        // we need to add the description for the pop up as well in order for it to appear
        locationManager.requestWhenInUseAuthorization()
        
        // location manager starts looking for gps locations of current iphone.
        locationManager.startUpdatingLocation()
        //this is an asynchornous method i.e it works in the background
        // constantly keeps finding the values
        // once it finds the location, it needs to report the location somehow
        // it will report to (message) the viewController
        //and in order to receive that message we need to have a method: didUpdateLocation()
        
    }
    
    
    
    //MARK: - Networking
    /***************************************************************/
    //We are trying to facilitate a communication between our App and openWeatherApp servers.
    //In order to do that: we need to perform http request.
    
    //Write the getWeatherData method here:
    func getWeatherData(url:String, parameters: [String:String]){
        //we will use AlamoFire to make the http request.
        
        //this is the block of code provided by AlamoFire documentation to make the get request.
        //Networking happens in an asynchronous fashion. -> AlamoFire is trying to communicate with the openWeatherMap servers in the background. It makes the request in the background and once it gets the message back from the sever -> then it comes into action.
        
        // this alamofire is a function inside another function [Closure]
        Alamofire.request(url, method: .get, parameters: parameters).responseJSON { // weatherURL for openWeatherMapApi
            // what is the method to which we are going to make our http request? => getRequest [Retrieves data]
            // method basically dictates what we want to do with the data on the data server.
            // parameters => inputs we need to give the openWeatherMap to get the weather of a particular geographic location.
           
            // once the request is complete, it triggers a response & that response contains data that is held inside this variable called response.
            response in // whenever you see this 'in' keyword you are inside the closure
            if response.result.isSuccess { // if data is succesfully retrieved in response / response succesful
                print("Success! Got the weather data")
                //once we know that the weather data has been succeesfully received:
                // we need to format the data: JSON: way of formatting large pieces of data on the internet.
                let weatherJSON : JSON = JSON(response.result.value!) // force unwrapping i.e value will defintely not be null
                // we have a weatherJSON object in the JSON format. [Casting a value into a JSON object.]
                
                //print(weatherJSON)
                self.updateWeatherData(json: weatherJSON)// you always have to specify self in front of your method calls in a closure.
                
            }
            else{ // if there is some error in retrieving the data:
                self.cityLabel.text = "Connection Issues"
            }
        }
        
        
    }
    
    

    
    
    
    
    
    //MARK: - JSON Parsing
    /***************************************************************/
    //Write the updateWeatherData method here:
    func updateWeatherData(json: JSON){
        if  let tempResult = json["main"]["temp"].double {//we are basically extracting the value of temp from the JSON object and converting it into a double
     
        weatherDataModel.temperature = Int(tempResult - 273.15) // ! => unwraps the optional
        weatherDataModel.city = json["name"].stringValue //we are basically extracting the value of city from the JSON object and converting it into a string value.
        
        weatherDataModel.condition = json["weather"][0]["id"].intValue
        
        weatherDataModel.weatherIconName = weatherDataModel.updateWeatherIcon(condition: weatherDataModel.condition)
    
         updateUIWithWeatherData()
        }
        else{
            cityLabel.text = "Weather Unavailable"
        }
    }

    
    
    
    //MARK: - UI Updates
    /***************************************************************/
    
    
    //Write the updateUIWithWeatherData method here:
    func updateUIWithWeatherData(){
        cityLabel.text = weatherDataModel.city
        temperatureLabel.text = "\(weatherDataModel.temperature)°"
        
        weatherIcon.image = UIImage(named: weatherDataModel.weatherIconName)
    }
    
    
    
    
    
    //MARK: - Location Manager Delegate Methods
    /***************************************************************/
    
    
    //Write the didUpdateLocations method here:
    
    // this is the method that gets activated once the location manager has found a location.
    func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
     //we end up with an array of whole bunch of location objects. the last value in the array is the most accurate
     let location = locations[locations.count - 1]
        if location.horizontalAccuracy>0 {// value is not invalid
            locationManager.stopUpdatingLocation() //stop updating location
            
            print("longitude = \(location.coordinate.longitude), latitude = \(location.coordinate.latitude)")
            
            //now once we get this location (comprising of latitude and longitude), we need to send this to the openweathermap api to acquire the weather at those coordinates.
            let latitude = String(location.coordinate.latitude)
            let longitude = String(location.coordinate.longitude)
            
            let params: [String: String] = ["lat" : latitude, "lon" : longitude, "appid" : APP_ID]
            // we are modelling this as per their URL. [openweathermapapi]
            
            getWeatherData(url:WEATHER_URL, parameters: params)
        }
        
    }
    
    
    //Write the didFailWithError method here:
    //this method gets activated when the location manager fails to find a location.[airplane mode/ no internet]
    func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
        print(error)
        cityLabel.text = "Location Unavailable"
    }
    
    

    
    //MARK: - Change City Delegate methods
    /***************************************************************/
    
    
    //Write the userEnteredANewCityName Delegate method here:
    func userEnteredANewCityName(city: String) {
       // print(city)
        
        // q is parameter for the city name.
        let params : [String: String] = ["q": city, "appid":APP_ID ]
        
        getWeatherData(url: WEATHER_URL, parameters: params)
    }

    
    //Write the PrepareForSegue Method here
    
    // this is something which gets triggered when we segue from the firstViewController to the secondViewController
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if segue.identifier == "changeCityName" {
            let destinationVC = segue.destination as! ChangeCityViewController
            destinationVC.delegate = self // WeatherViewController /[Current View Controller]
        }
        
        
    }
    
    
    
    
}


