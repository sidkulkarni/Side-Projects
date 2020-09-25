//
//  SecondViewController.swift
//  Delegates and Protocols
//
//  Created by Siddharth Kulkarni on 8/23/19.
//  Copyright © 2019 Siddharth Kulkarni. All rights reserved.
//

import UIKit

// a protocol is like a contract.
// the protocol does not know how to implement any of its functions
//it merely sets out the rules of engagement
//we need to go to our firstViewController and conform to a protocol
protocol CanReceive { // this protocol is going to have a single require method:
    
    func dataReceived(data: String)
}


class SecondViewController: UIViewController {

    var data = ""
    
    var delegate : CanReceive?
    //property of type canReceived which is an optional.[there may or may not be a delegate.]
    
    @IBOutlet weak var label: UILabel!
    
    
    @IBOutlet weak var textField: UITextField!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()

        label.text = data
        // Do any additional setup after loading the view.
    }
    
    
    
    @IBAction func sendDataBack(_ sender: Any) {
    
    delegate?.dataReceived(data: textField.text!)
    
    dismiss(animated: true, completion: nil)
        
    }
    
   
    
   
    
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
