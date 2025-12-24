let x="neeraj";
let y=x;
x="neymar";

console.log(x);
console.log(y);

let p={name:"neeraj",rollno:18};
let q=p;//this is like pointer in cpp ,here it is copied by reference ,both place value will be changed ,if we manupilate the q
q.name="neymar";

console.log(p);
console.log(q);