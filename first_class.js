function add(a,b){
    return a+b;
}

console.log(add);
console.log(add(5,6));

let diff=function diff(a,b){
    return a-b;
}

let sum=function add(a,b){
    return a+b;
}

console.log(diff);
console.log(diff(19,8));

console.log("next is fun inside a function thing");

function help(fn,a,b){
    return fn(a,b);
}

console.log(help(sum,4,6));
console.log(help(diff,4,6));

// higher order functions -fns that returns functions as a result ,or takes functions as arguments  