//
//  ViewController.swift
//  Delegates and Protocols
//
//  Created by Siddharth Kulkarni on 8/23/19.
//  Copyright © 2019 Siddharth Kulkarni. All rights reserved.
//

import UIKit

//ViewController conforms to CanReceive protocol.

// class inheritance has different color than protocol.

//if you are going to be the delegate[ViewController]
//then you need to have a method to
//handle the data.
class ViewController: UIViewController, CanReceive {

    var dataPassedBack = ""
    
    @IBOutlet weak var label: UILabel!
    
    @IBOutlet weak var textField: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        label.text = dataPassedBack
    }

    @IBAction func sendButtonPressed(_ sender: Any) {
        
    performSegue(withIdentifier: "sendDataForwards", sender: self)
        
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
      
        if segue.identifier == "sendDataForwards"{
        
         let secondVC = segue.destination as! SecondViewController
            
        secondVC.data = textField.text!
            
        secondVC.delegate = self
        }
        
    }
    
    //this method gets triggered once the data gets sent back
    func dataReceived(data: String) {
        label.text = data
    }
    
}

