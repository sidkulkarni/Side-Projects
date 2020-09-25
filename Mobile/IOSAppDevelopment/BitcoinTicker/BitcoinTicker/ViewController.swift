//
//  ViewController.swift
//  BitcoinTicker
//
//  Created by Angela Yu on 23/01/2016.
//  Copyright © 2016 London App Brewery. All rights reserved.
//

import UIKit
import Alamofire // to make the HTTP request
import SwiftyJSON // to pass the JSON object

//Cocoapods that we need:
//Alamofire: to make the HTTP request.
//SwiftyJSON: to pass the JSON object



//we are basically declaring that our class: ViewController is going to conform to these two protocols.
//i.e it is going to be able to handle any messages receieved from the UIPicker in order to handle what should happen when the user spins that picker.

//when we run the app and the user spins the UIPicker and wants to select a currency, the ViewController gets notified as the ViewController is the delegate.

class ViewController: UIViewController, UIPickerViewDelegate, UIPickerViewDataSource {
    
    
    // this is the URL of the api from which you are going to extract the data.
    let baseURL = "https://apiv2.bitcoinaverage.com/indices/global/ticker/BTC"
    let currencyArray = ["AUD", "BRL","CAD","CNY","EUR","GBP","HKD","IDR","ILS","INR","JPY","MXN","NOK","NZD","PLN","RON","RUB","SEK","SGD","USD","ZAR"]
    var finalURL = ""
    

    //Pre-setup IBOutlets
    @IBOutlet weak var bitcoinPriceLabel: UILabel!
    @IBOutlet weak var currencyPicker: UIPickerView!
    
     //TODO: Place your 3 UIPickerView delegate methods here
    
    
    //the 3 functions below are the delegate methods and our going to be called when the UIPicker loads up when the screen loads up.
    
    //this function specifies how many components (columns) you have in the UIPickerView
    
    func numberOfComponents(in pickerView: UIPickerView) -> Int {
        return 1 //as we just want one column in our generic UIPicker
    }

    //this function specifies the number
    //of rows in UIPickerView
    func pickerView(_ pickerView: UIPickerView, numberOfRowsInComponent component: Int) -> Int {
        
       return currencyArray.count
        
    }
    
    //this function is used to fill the
    // UI pickerView with data.
    
    //this will loop through the row and give a title (string) to each row.
    func pickerView(_ pickerView: UIPickerView, titleForRow row: Int, forComponent component: Int) -> String? {
        
        //we want the titles to be currency array picked out by the rows.
        return currencyArray[row]
    }
    
    
    //this method basically tells the ViewController which row was selected from the UIPickerView.
   
    
    
    //this is the delegate method that gets called when the user picks a new row in the UIPicker.
    func pickerView(_ pickerView: UIPickerView, didSelectRow row: Int, inComponent component: Int) {
        
        //this URL is going to request us the data that we need.
        finalURL = baseURL + currencyArray[row]
        print(finalURL)
        getBitcoinData(url: finalURL)
    }
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
       
        currencyPicker.delegate = self
        currencyPicker.dataSource = self
    
    }

//    
    //MARK: - Networking
    /***************************************************************/
    
    func getBitcoinData(url: String) {
        
        Alamofire.request(url, method: .get)
            .responseJSON { response in
                if response.result.isSuccess { // sucessfully retrieved the bitcoing data

                    print("Sucess! Got the bitcoin data")
                    let bitcoinJSON : JSON = JSON(response.result.value!)

                    self.updateBitcoinData(json: bitcoinJSON)

                } else {
                    print("Error: \(String(describing: response.result.error))")
                    self.bitcoinPriceLabel.text = "Connection Issues"
                }
            }

    }

    

    
    
    //MARK: - JSON Parsing // parsing the data from the JSON object.
    /***************************************************************/
    
    func updateBitcoinData(json : JSON) {
        
        if let bitcoinResult = json["ask"].double { // if it is not nill we can execute this block of code.
            //show the extracted result on the bitcoinPrice Label:
            bitcoinPriceLabel.text = String(bitcoinResult)
        }
        else{
            bitcoinPriceLabel.text = "Price Unavailable"
        }
    }

}
