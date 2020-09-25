import UIKit


func calculator (n1:Int, n2: Int, operation :(Int, Int)->Int) ->Int {
    return operation (n1,n2)
}


func add (no1: Int, no2: Int)->Int {
    return no1 + no2
}


func multiply (no1: Int, no2: Int) ->Int {
    return no1 * no2
}

//Method1: Without using closures. You can pass a function as an argument to another function

calculator(n1: 2, n2: 3, operation: add) // output = 5

calculator(n1: 2, n2: 3, operation: multiply) // output = 6


// Closures [Anonymous Functions] Block of code that you can pass around freely to other functions or set as a variable.

//Method 2: using Closures [reduces code]
calculator (n1: 2, n2: 3, operation: { (no1:Int, no2: Int) -> Int in
    return no1 * no2
} )

//Method 3: using Closures [reduces code even more]

calculator (n1: 2, n2: 3, operation: { (no1:Int, no2: Int)  in no1 * no2 })

//Method 4: using Closures [reduces code even more]

//$0 ->represents first parameter
//$1 ->represents second parameter

let result = calculator (n1:2, n2:3, operation: {$0 * $1})
print(result)

//Method 5: using Closures [reduces code even more] =>Trailing Closure
let result2 = calculator (n1: 2, n2: 3) {$0 * $1}
print(result2)
