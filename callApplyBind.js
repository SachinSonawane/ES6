// Call

var obj = {
    name: 'sachin',
    age: '28',
    city: 'Mumbai'
}

function callMe(key1, key2) {
    console.log(key1+' '+this.name+' '+this.age+' '+key2+' '+this.city);
} 

// with spread operator
/* function callMe(...param) {
    console.log(param[0]+' '+this.name+' '+this.age+' '+param[1]+' '+this.city);
} */

// with arguments
/* function callMe() {
    console.log(arguments[0]+' '+this.name+' '+this.age+' '+arguments[1]+' '+this.city);
} */

callMe.call(obj, 'Hello My name is', 'from');

// Apply

callMe.apply(obj, ['Hello My name is', 'from']);

// Bind
let bindFunc = callMe.bind(obj, 'Hello My name is', 'from');
bindFunc();
