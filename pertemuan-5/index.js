// //IIFE & CALLBACK

// //1. IIFE (Immediately Invoked Function Expresion)

// //No params
// (function (){
//     console.log("Hello Word");
// })();

// //With params
// let output = (function (fullName){
//     return "hello " + fullName;
// })("John Doe");
// console.log(output);

//CallBack Function
// //No params & args & return value
// function sayHello(callback){
//     //Logic
//     callback();
// }

// function greetings(){
//     console.log("Hello CallBack Function");
// }

// sayHello(greetings);


//With params & args & return value
function sayHello(callback){
    let output = callback("Jonald");
    return output;

}

let output = sayHello(function (fullName){
    return"Hello " + fullName;
});

console.log(output);