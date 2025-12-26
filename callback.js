// callback = a function that is passed as an argument
// to another function.
//
// used to handle asynchronous operations:
// 1. Reading a file
// 2. Network requests
// 3. Interacting with databases

// "Hey, when you're done, call this next."


hello();
goodbye();

function hello() {
    setTimeout(function () {
        console.log("Hello!");
    }, 3000);
}

function goodbye() {
    console.log("Goodbye!");
}

//without settimeout - hello ,goodbye 
// after timeout - goodbye ,hello ,
// to correct this we use callback 

// setTimeout() is a built-in JavaScript function that runs a piece of code after a specified delay, without blocking the rest of the program.

helloo(goodbyee);
function helloo(callback){
    console.log("hello!");
    callback();
}
function goodbyee(){
    console.log("goodbye!");
}
//now its correct 