// let call = () => console.log("call");

//let call = (a) => {console.log("call")};

//let call = (a) => console.log("call",a);

let call = a => console.log("call",a);

let callme = function() {
    console.log("call me")
}

call(10);

// don't use arrow function inside object. this keyword is accessible inside object

const obj = {
    name: 'sachin',
    city: 'sillod',
    display: () => {
      console.log(`Hi this is ${this.name}`)  
    }
}

obj.display();

const obj1 = {
    name: 'sachin',
    city: 'sillod',
    display: function() {
      console.log(`Hi this is ${this.name}`)  
    }
}

obj1.display();


