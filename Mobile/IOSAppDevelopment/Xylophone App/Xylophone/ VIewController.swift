//
//  ViewController.swift
//  Xylophone
//
//  Created by Angela Yu on 27/01/2016.
//  Copyright © 2016 London App Brewery. All rights reserved.
//

import UIKit // library which has most of the basic functionality and stuff we would need.
import AVFoundation // audio video foundation - library to play sound.

class ViewController: UIViewController, AVAudioPlayerDelegate{
    
    
    // these are global variables: can be accessed all over the scope of the class.
    var audioPlayer : AVAudioPlayer!
    let soundArray = ["note1","note2","note3","note4","note5","note6","note7"]
    

    override func viewDidLoad() {
        super.viewDidLoad()
    }



    @IBAction func notePressed(_ sender: UIButton){
       // steps to play a sound from an audio file.
        
        // this is a local variable: can be accessed only in the scope of this function.
        var soundName:String = soundArray[sender.tag - 1]
        
        playSound(soundName: soundName)

    }
    
    func playSound(soundName: String){
        
        
        let soundURL = Bundle.main.url(forResource: soundName, withExtension: "wav")
        
        do {
            audioPlayer = try AVAudioPlayer(contentsOf: soundURL!)
        }
        catch{
            print(error)
        }
        
        audioPlayer.play()
        
    }
    
  

}

