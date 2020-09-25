import UIKit

class Firebase {
    
    
//we are passing in the (completed function code) into this parameter called completion.
    func createUser(username: String, password: String, completion: (Bool, Int)-> Void){
        
        //do something time consuming
        var isSuccess = true
        var userID = 123
        
        //once the time consuming part is done then we call that function
        //refering to it by name completion(isSuccess, userID)
        
        completion(isSuccess, userID)
    }
    
}


class MyApp {
    
    func registerButtonPressed(){
       
        //we create a new firebase object
        let firebase = Firebase()
       
        //we tap into that object's createUserMethod passing a username, password and also a function that goes under the parameter completion
//
        
        //firebase.createUser(username: "Siddharth", password: "123456", completion: completed)
//
        
        
        //now we will call the same method using Closures[Anonymous Functions]
        //Using Trailing Closures Method: [UnComment Line 35-41 and comment line 30 and 47-51]
        
        firebase.createUser(username: "Siddharth", password: "123456") {
            (isSuccess: Bool, userID: Int) in

            print("registration is successful: \(isSuccess)")
            print("userID is: \(userID)")

        }
  
    }
        
    
    //then method call on line 17 gets completed over here and those parameters get passed in over here.
//    func completed(isSuccess: Bool, userID: Int){
//        print("registration is successful: \(isSuccess)")
//        print("userID is: \(userID)")
//    }
    
}


let myApp = MyApp()
myApp.registerButtonPressed() // we trigger method registerButtonPressed
