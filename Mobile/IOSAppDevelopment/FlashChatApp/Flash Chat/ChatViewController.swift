//
//  ViewController.swift
//  Flash Chat
//
//  Created by Angela Yu on 29/08/2015.
//  Copyright (c) 2015 London App Brewery. All rights reserved.
//

import UIKit
import Firebase
import ChameleonFramework

//our ChatViewController is the delegate of all these protocols.
//Whenever something occurs in TableView/Textfield -> it knows to send a message to ChatViewController
class ChatViewController: UIViewController,UITableViewDelegate,UITableViewDataSource, UITextFieldDelegate {
    
    // Declare instance variables here
    // this is a messageArray that is going to be populated with message objects.
    var messageArray : [Message] = [Message]() // brand new empty array of message objects.
    
    // We've pre-linked the IBOutlets
    @IBOutlet var heightConstraint: NSLayoutConstraint!
    @IBOutlet var sendButton: UIButton!
    @IBOutlet var messageTextfield: UITextField!
    @IBOutlet var messageTableView: UITableView!
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        //TODO: Set yourself as the delegate and datasource here:
        messageTableView.delegate = self
        messageTableView.dataSource = self
        
        
        //TODO: Set yourself as the delegate of the text field here:

        messageTextfield.delegate = self
        
        //TODO: Set the tapGesture here:
        
        //whenever you tap on the messageTableView it calls the TapGesture method which in turn calls tapGesture method.
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(tableViewTapped))
        messageTableView.addGestureRecognizer(tapGesture)
        
        

        //TODO: Register your MessageCell.xib file here:
        
        //registers a design file:
        //Step3: registering our message cell. xib file
        messageTableView.register(UINib(nibName: "MessageCell", bundle: nil), forCellReuseIdentifier: "customMessageCell")
        
        configureTableView()
        retrieveMessages()
    
        messageTableView.separatorStyle = .none
    }
    

    ///////////////////////////////////////////
    
    //MARK: - TableView DataSource Methods
    
    
    
    //TODO: Declare cellForRowAtIndexPath here:
    
    //we are using a custom design cell for our tableView.
    //Step1: Create cellForRowAt indexPath method
    
    
    //this method gets called for every single cell that exists inside the TableView
    //so naturally we need to determine how many cells we need inside our TableView.
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        
        //Step2: Create the cell using DequeReusableCell Method
        let cell = tableView.dequeueReusableCell(withIdentifier:
            "customMessageCell", for: indexPath) as! CustomMessageCell
        
        cell.messageBody.text = messageArray[indexPath.row].messageBody // populated message body
        cell.senderUsername.text = messageArray[indexPath.row].sender // sender name
        cell.avatarImageView.image = UIImage(named:"egg") //this image is already present in image assets.
     
        
        //differentiatiing UI of cells for different users:
        if cell.senderUsername.text == Auth.auth().currentUser?.email as String? {
            //messages we sent: change appearance of messages we sent
            cell.avatarImageView.backgroundColor = UIColor.flatMint()
            cell.messageBackground.backgroundColor = UIColor.flatSkyBlue()
        }
        else{
            //change appearances of messages we did not send:
            cell.avatarImageView.backgroundColor = UIColor.flatWatermelon()
            cell.messageBackground.backgroundColor = UIColor.flatGray()
        }
        
        return cell // output in the form of UITableView Cell
    }
    
    
    
    //TODO: Declare numberOfRowsInSection here: [how many rows we'd want in our table.]
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return messageArray.count  // based on number of objects in our messageArray, we want those many cells.
    }
    
    
    //we can specify number of sections as well but as we do not need different sections in a messaging app -> we do not need it.
    
    
    
    //TODO: Declare tableViewTapped here:
   @objc func tableViewTapped(){
        messageTextfield.endEditing(true)
    }
    
    
    
    //TODO: Declare configureTableView here:
    //in order to modify the cell size as the message may be short/long
    func configureTableView(){
        messageTableView.rowHeight = UITableView.automaticDimension
        messageTableView.estimatedRowHeight = 120.0
    }
    
    ///////////////////////////////////////////
    
    //MARK:- TextField Delegate Methods
    
    

    
    //TODO: Declare textFieldDidBeginEditing here:
    //this gets triggered when some activity is detected inside the TextField i.e a user is beginning to type inside that textfield.
    
    func textFieldDidBeginEditing(_ textField: UITextField) {
       
        //we're adding animation to the app: [Note that the animations parameter is actually taking a closure as its argument.] => trailing closure
        UIView.animate(withDuration: 0.5){
           //because we are inside a closure now, we have to specify that the method is in our own class. So we have to specify 'self' keyword in front of both of these methods.
            
            self.heightConstraint.constant = 308
            self.view.layoutIfNeeded() // in order to update the views on screen.
        }
    }
    
    
    
    //TODO: Declare textFieldDidEndEditing here:
    func textFieldDidEndEditing(_ textField: UITextField) {
        UIView.animate(withDuration: 0.5){
            //because we are inside a closure now, we have to specify that the method is in our own class. So we have to specify 'self' keyword in front of both of these methods.
            
            self.heightConstraint.constant = 50
            self.view.layoutIfNeeded() // in order to update the views on screen.
        }
    }

    
    ///////////////////////////////////////////
    
    
    //MARK: - Send & Recieve from Firebase
    
    
    
    
    //once the send button is pressed.
    @IBAction func sendPressed(_ sender: AnyObject) {
        
       messageTextfield.endEditing(true) //done typing/editing message.
        
        //while the message is being sent into the database [the time consuming process is being completed]:
        // we do not want to see the text field and the send button during when this time consuming process is going on. Therefore, we disable the two things.
        messageTextfield.isEnabled = false //  the textField can't take any text.
        sendButton.isEnabled = false //button is no longer clickable
        
        
        //Now we want to create a messagesDB inside our Firebase DB so that we have a dedicated db just to keep track of all the messages that are being passed around in our App.
        
        //we're going to use the child method to create a new child database inside our main Firebase database. "Messages" is the name of that child database.
        let messagesDB = Database.database().reference().child("Messages")
        
        
        //Next thing: We're going to save the user's message as a dictionary.
        //Dictionary: Key-Value Pairs [Sender, MessageBody]
        
        //Sender is the current user's email. -> this is how we tap into details of the current user.
        
        // all this is the only information that we need with regard to a particular message.
        let messageDictionary = ["Sender": Auth.auth().currentUser?.email,
                                 "MessageBody": messageTextfield.text!]
        
        // what this does is that it creates a custom random key for our message so that our messages can be saved under their unique identifier.
        messagesDB.childByAutoId().setValue(messageDictionary){
            (error, reference) in
            
            if error != nil{
                print(error)
            }
            else{
                print("Message saved successfuly.")
            }
            
            
            //Now we are re-enabling the message text and the send button: [we are calling these functions over self because we are inside the closure.]
            self.messageTextfield.isEnabled = true
            self.sendButton.isEnabled = true
            
            self.messageTextfield.text = "" // once the send button is pressed, we want the messageTextField area to clear.
            
        }
        //So basically all that line 183 and below is doing is that:
        //we're saving our [message dictionary] inside our [messagesDB] under an automatically generated identifier. This message can also have a completion block in the form of a closure. So we have a trailing clousure in this method. We can tap into two parameters: Error: i.e if there was an error in saving the dictionary i.e saving the data into the DB. And also: Reference: which is a reference of the data that was saved.
        
        
    }
    
    //TODO: Create the retrieveMessages method here:
    func retrieveMessages () {
        //make sure the name of "Messages" is same as the name of the Db where we are sending in order to make sure that we are sending and receiving messages from the same DB.
        let messageDB = Database.database().reference().child("Messages")
        // so using that reference we're going to ask Firebase to keep an eye out for any new data being added to the "messages"DB which is a child of the firebaseDB.
        //So in Firebase's speak:
        //what we are saying is: we're observing for the event type child added-> that refers to when a new message is being put into the Database. So  we're not constantly retrieving.
        //Only whenever new data is added to the database, we want to grab the results of that database.
        
        //whenever a new entry is added to the DB: .childAdded
        // whenever a new item is added to the messagesDB -> the closure will get called.
        messageDB.observe(.childAdded, with: {(snapshot) in
            
            let snapshotValue = snapshot.value as! Dictionary<String,String> // treat this data as dictionary.
            
            //so we can use this snapshot value and tap into its strings.
            let text = snapshotValue["MessageBody"]!
            //this should pull out the value as an optional string.
            // ! is used to unwrapping.
            let sender = snapshotValue["Sender"]!
        
            //print(text,sender) //for our testing purposes.
            //Now instead of printing these two items: we want to save them into a message object:
            
            //We need to creat a new message object and we're going to set its properties to the text and the sender that we get back from our firebaseDB
            
            //we are using the Message class to structure our messages.
            let message = Message()
            message.sender = sender
            message.messageBody = text
            
            //self because we are inside a closure
            self.messageArray.append(message)
            
            self.configureTableView() //we're putting in the messages that we got back from our cloudDB, WE need to reformat the tableView.
            
            //we also need to reload the data on the messageTableView. That means every single time we add new data to our "Messages" DB, it will trigger the event on line 219 where a new child is added, which means the closure [line 219-249] gets called.
            
            //Every single time there is new data in the DB, we will need to reload the MessageTableView with new data so that it reflects the data that gets added.
            self.messageTableView.reloadData()
            
        })
        
    }
    
    

    
    
    
    @IBAction func logOutPressed(_ sender: AnyObject) {
        
        //TODO: Log out the user and send them back to WelcomeViewController
        //we use firebase's method to logout.
        
        do{
            try Auth.auth().signOut() // this is the line of code which is potentially going to cause trouble. We're going to do it anyways. If for some reason there is an error, the error will be caught in the catch block.
            
            navigationController?.popToRootViewController(animated: true)
            // this is all that I need to do in order to take the user from the ChatViewController to the WelcomeViewController which is the root view controller after they have logged out.
        
        }
        catch{
            print("Error! There was a problem signing out.")
        }
        //this method can throw an error:
        //->maybe network not active
        //->maybe no internet connection,
        //->maybe unable to signout the current user.
        //whenever there is a method like this which can throw an error:
        //we have to call this method in the try-catch/do-catch block in order to catch the error that has been thrown.
        
    }
    


}
