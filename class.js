
class myClass {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    display() {
        return `Hi this is ${this.name}`;
    }

}

let obj = new myClass('sachin', 'sonawane');

console.log(obj.display());

// class is a function or the constructor method
console.log(typeof myClass);
console.log(myClass == myClass.prototype.constructor);
console.log(myClass.prototype.display);

/* OR */

// This has inbuild constructor
function myFunction(name, surname) {
    this.name = name;
    this.surname = surname;
}

myFunction.prototype.display = function() {
    return `Hi this is ${this.name}`;
}

let obj1 = new myFunction('sachin', 'sonawane');
console.log(obj1.display());

/* Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc. */
let Test = class {
    display() {
        console.log("hello world");
    }
}

let User = class MyClass {
    sayHi() {
      console.log(MyClass); // MyClass name is visible only inside the class
    }
  };
  
  new User().sayHi(); // works, shows MyClass definition
  
//console.log(MyClass);

function testCall(value) {
    return class {
        display() {
            console.log('my value', value)
        }
    }
}

let test = testCall(10);
new test().display();

/* Getters and Setters */
class newTest {
     constructor(val) {
        this.val = val;
        console.log('val',val)
    } 

    get name() {
        return this.name;
    }

    set name(name) {
        if (name.length < 4) {
            console.log("Name is too short.");
            return;
          }
          this.name = value;
          console.log("Your name is", this.name);
    }
}

let ntest = new newTest("sachin");
console.log(ntest);




