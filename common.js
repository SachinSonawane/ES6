// Object.assign - to copy the object (deep copy)
const source = {a: 1, b: 2};
const target = {b: 4, c:8};

Object.assign(target, source);
console.log(source);
console.log(target);

// Object.keys - gives you array of keys
console.log(Object.keys(source));

// IIF
(function(a) {
    console.log("callling "+a);
})(10);

/* 
Slice-
1. create subset of array
2. does not modify array
3. accepts first index and last index to create subset
*/

var arr = [1,2,3,4,5,6];

var arr1 = arr.slice(1,4);
console.log(arr1);
console.log(arr);

/* 
Splice-
1. add/remove/modify array
2. create subset for removed data
3. first parametr - starting index
4. second parameter - number of indexes to be removed
5. third parameter - elements to be addded at specify position
*/

var arr = [1,2,3,4,5,6];

arr.splice(3,0,8,10);
console.log(arr);

/* Parenthesis to write block level code  */

{
    let msg = "hello world";
    console.log(msg);
}

let i, j, k;
let obj
