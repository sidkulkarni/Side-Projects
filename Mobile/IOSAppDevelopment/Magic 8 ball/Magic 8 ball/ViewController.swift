//
//  ViewController.swift
//  Magic 8 ball
//
//  Created by Siddharth Kulkarni on 7/23/19.
//  Copyright © 2019 Siddharth Kulkarni. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var ballImage: UIImageView!
    
    let diceArrray = ["ball1","ball2","ball3", "ball4", "ball5"]
    
    var randomNum:Int = 0 // variable which can be changed
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        changeImage()
    }
    
    @IBAction func askButton(_ sender: Any) {
        changeImage()
        
    }
    
    func changeImage(){
        
         randomNum = Int.random(in: 0...4)
        
        ballImage.image = UIImage(named: diceArrray[randomNum])
        
        
    }
    
    override func motionEnded(_ motion: UIEvent.EventSubtype, with event: UIEvent?) {
        changeImage()
    }
    
    
}

