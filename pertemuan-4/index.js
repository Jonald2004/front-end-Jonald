//Javascript Function

// //Cara 1.
// function greetings(){
//     console.log("Hello Word");
// }
// greetings(); //Call function

// //Cara 2.
// let perkenalan = function(){
//     console.log("Hello Saya jonald");
// }
// perkenalan(); //Call function


//Parameter & Argument
//Dengan input (parameter) dan output (return value)

// //                  (Parameter)
// function greetings1(fullName){
//     return "Hello " + fullName;
// }
// //Cara 1.
// //                      (Argument)
// let output1 = greetings1("John Doe");
// console.log(output1);

// //Cara 2.
// let greetings2 = function(fullName){
//     return "Hello " + fullName;
// }
// let output2 = greetings2("John Doe");
// console.log(output2);


//Global, Local Scope & Block
let x = 10; //Global

function foo(){
    let y =20; //Local 
    let z =30;
    console.log(x); //10
    console.log(y); //20
    if (z > x){
        let a = 40; //Block Scope
        console.log(a); //40
    }
    //console.log(a); //error
}

// console.log(y); //error (karena Local function)
foo();