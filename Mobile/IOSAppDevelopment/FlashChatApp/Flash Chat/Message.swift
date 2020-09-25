//
//  Message.swift
//  Flash Chat
//
//  This is the model class that represents the blueprint for a message

//we'll be using the message model to structure the data that we get back from Firebase
//database so that we can create a message object that contains both the sender and the message body which we've saved into our Firebase when we sent our message.

class Message {
    
    //TODO: Messages need a messageBody and a sender variable
    
    var sender: String = ""
    var messageBody: String = ""
    
}

//this is going to be used to hold and represent our messages.
