// asynchronous function
console.log("Start");

setTimeout(() => {
    console.log("Async task done");
}, 2000);

console.log("End");

// synchronous function 
console.log("Start");
sleep(2); 
console.log("End");

