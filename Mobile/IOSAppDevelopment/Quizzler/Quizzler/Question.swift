//
//  Question.swift
//  Quizzler
//
//  Created by Siddharth Kulkarni on 8/1/19.
//  Copyright © 2019 London App Brewery. All rights reserved.
//

import Foundation


class Question {
    
    let questionText: String
    let answer: Bool
    
    init(text:String, correctAnswer: Bool){
        questionText = text
        answer = correctAnswer
    }
}

