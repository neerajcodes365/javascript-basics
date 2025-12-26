helloo(goodbyee);
function helloo(callback){
    console.log("hello!");
    callback();
}
function goodbyee(){
    console.log("goodbye!");
}