//
//  RegisterViewController.swift
//  Flash Chat
//
//  This is the View Controller which registers new users with Firebase
//

import UIKit
import Firebase
import SVProgressHUD


class RegisterViewController: UIViewController {

    
    //Pre-linked IBOutlets

    @IBOutlet var emailTextfield: UITextField!
    @IBOutlet var passwordTextfield: UITextField!
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }
    

  
    @IBAction func registerPressed(_ sender: AnyObject) {
        
        
        SVProgressHUD.show() // pop up which will show a loading indicator/

        // When the register button is pressed on the Registration Screen:
        
        
        //TODO: We need to set up a new user on our Firebase database
        //code for our firebase authentication
        
        //we're tapping into pre-existing Firebase Authentication class and get the authentication object and we are incorporating method: create user with email and password.
        
        //emailTextField.text! => whatever the user types in the email
        
        
        //we're calling the createUser method. We're giving it an email, we're giving it a password and we're also triggering the completion handler block using a closure.
        //And inside this closure we'll be passed back two items [from the pre-existing firebase createUser method.]
        //1-> is the user details & 2-> an error if there was any error.
        //
        
        Auth.auth().createUser(withEmail: emailTextfield.text!, password: passwordTextfield.text!) {
            
            //this closure below only gets triggered once the time-consuming process of creating users gets completed in the firebase authentication class.
            
            //So essentially we have a process that is happening in the background i.e creating a user. Once that process is completed we get a callback in the form of a completion handler and then we deal with that callback by taking the user to the Chat View Controller.
            
            //So that means our app isn't frozen [blocked up] while that userCreating/ Networking (time consuming process) happens.
            //And only once its complete, we do get a message and we trigger the next stage.
            
            //So this is how completion handlers work. The closures get passed in as an input parameter to the createUser method and that closure only gets called when everything [time-consuming process / networking / creating user gets completed]
            
            //So up till now we've seen
            //when we called our API: it has to do something in the background (namely it has to fetch the weather data/ it has to fetch the bitcoin data)
            //and only once that's complete o we get a callback message and we get our closure being executed.
            
        
            (user, error) in //everytime you see in keyword: you are probably inside a closure.
            
            //we check if there is any error. If so we print the error
            if error != nil { //if there is some error
                print(error)
            }
                
                // if there is no error: we're going to take our users to chat view controller.
            else{ // there is no error
                print("Registration Successful!")
                
                SVProgressHUD.dismiss() //Once the long process is done, we dismiss the loading indicator.
                
                //whenever you are trying to call a method inside a closure -> you'll have to write the self keyword before it.
                self.performSegue(withIdentifier: "goToChat", sender: self)
            }
        }
        
        
        

        
        
    } 
    
    
}
