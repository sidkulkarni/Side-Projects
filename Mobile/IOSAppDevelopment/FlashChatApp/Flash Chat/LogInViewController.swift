//
//  LogInViewController.swift
//  Flash Chat
//
//  This is the view controller where users login


import UIKit
import Firebase
import SVProgressHUD // progress bar to show the user how much progress is done.


class LogInViewController: UIViewController {

    //Textfields pre-linked with IBOutlets
    @IBOutlet var emailTextfield: UITextField!
    @IBOutlet var passwordTextfield: UITextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
    }

   
    @IBAction func logInPressed(_ sender: AnyObject) {

        SVProgressHUD.show() // pop up which will show a loading indicator/
        
        //TODO: Log in the user
        //pre-existing method to sign in using firebase
        Auth.auth().signIn(withEmail: emailTextfield.text!, password: passwordTextfield.text!){ (user,error) in
            
            if error != nil {
                print(error!)
            }
            else{
                print("Log in Successful")
                //name of that segue: goToChat , sender: self because it is the currentViewController
                
                //because we are inside the closure: we need to use keyword self to call the function.
                
                SVProgressHUD.dismiss() //long process is finished and we'll take the user striaght to the chatViewController.
                self.performSegue(withIdentifier: "goToChat", sender: self )
            }
            
        }
    }
    


    
}  
