// // function outer() {
// //     function inner() {
// //         console.log('hello');
// //     }
// //     return inner;
// // }

// // let returnedFuncVar = outer();
// // console.log(returnedFuncVar);
// // returnedFuncVar();
// let a = 10;

// function outer() {
//     a = 100;
//     function inner() {
//         console.log(a);
//     }
//     return inner;
// }

// let returnedFuncVar = outer();
// console.log(returnedFuncVar);
// returnedFuncVar();

function init() {
    var name = 'Mozilla';
    function displayName() {
        // displayName() is the inner function
        console.log(name);
    }
    name = "neeraj";
    return displayName;
}

let c = init();
c();
//note =function + lexical scope =closure
// pinne lexical scope aya variable nte reference ann vekka ,not area,aaa variable nte pointer avum store ava