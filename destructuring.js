/*----------------- Array Destructuring -----------------*/

let arr = ['apple', 'mango', 'grapes', 'orange'];

// fruit1 = arr[0];
// fruit2 = arr[1];
let [fruit1, fruit2, fruit3] = arr;

let [frt1, ...frt2] = arr;
console.log(...frt2);


// if you don't want any middle value, just keep it blank.
// let [fruit1, , fruit3] = arr;
// console.log(fruit1);
// console.log(fruit3);
let str = 'sachin sonawane';
let user = {};
[user.firstName, user.lastName] = str.split(' ');


/* -------------------Object destructuring ---------------- */

//let obj = {a:1, b:2 , c:3 ,d:4};
let obj = {a:1, c:3 ,d:4};
//let {a, b, c} = obj;
//console.log(a,b,c);

//let {a:i, b:j, c} = obj;
//console.log(i,j,c);

//let {a=10, b=20, c} = obj;

let {a, ...rest} = obj




