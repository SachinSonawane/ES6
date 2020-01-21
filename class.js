
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

myFunction.prototype.display = function () {
    return `shahsi ${this.name}`;
}

let obj1 = new myFunction('sachin', 'sonawane');
console.log(myFunction.prototype.name);
console.log(obj1.display());

/* Just like functions, classes can be defined inside another expression, passed around, returned, assigned, etc. */
let Test = class {
    display() {
        console.log("hello world");
    }
}

new Test().display();

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
    constructor(name) {
        this.name = name;
        console.log('val', this.name)
    }

    get name() {
        return this._nam;
    }

    set name(name) {
        if (name.length < 4) {
            console.log("Name is too short.");
            return;
        }
        this._nam = name;
        console.log("Your name is", this._nam);
    }
}

let ntest = new newTest("sachin");
console.log(ntest);


/* Private and Protected Properties and method */
class CoffeeMachine {
    _waterAmount = 0;

    set waterAmount(value) {
        if (value < 0) throw new Error("Negative water");
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }

    constructor(power) {
        // this._power = power;
    }

}

// create the coffee machine
let coffeeMachine = new CoffeeMachine(100);

// add water
//coffeeMachine.waterAmount = -10;

/* Private variable */
class varClass {
    _proVar;

    setProVar(val) {
        this._proVar = val;
    }

    getProVar() {
        return this._proVar;
    }

}

let varObj = new varClass();
varObj.setProVar(100);
console.log(varObj.getProVar());
console.log(varObj._proVar);
console.log(varObj instanceof varClass);

/* Inheritance */

class Animal {
    name = 'Rabit';
    speed = '5';

    constructor(...arr) {
        console.log('calling animal constructor');
        console.log(arr);
        this.name = arr[0];
        this.speed = arr[1];
    }
}

// super is compulsory to call when extending the class

class Rabit extends Animal {
    constructor(...args) {
        console.log('calling rabit constructor');
        super(...args);
    }
    display() {
        return `This is ${this.name} and speed is ${this.speed}`
    }
}

new Rabit('Rat', '5');
//new Animal('Parrot', '10')

//console.log(new Rabit('Rat', '5').display());
//console.log(new Rabit() instanceof Animal);

function f() {
    return class {
        name = 'sachin';
        city = 'sillod';

        display() {
            console.log("from return class")
            return `This is ${this.name} from return ${this.city}`;
        }

    }
}

class testFunction extends f() {
    display() {
        //setInterval(()=>super.display(),1000)    
        super.display();
        console.log("from testFunction");
        return `This is ${this.name} from testFunction ${this.city}`;
    }
}

var fClass = f();
console.log(new testFunction().display());

/* Mixins */

let mixinClass = {
    display() {
        return `Hi this is ${this.name}`;
    }
}

class mixinTest {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(mixinTest.prototype, mixinClass);

console.log('check',new mixinTest('Sachin').display());
console.log(f.prototype);

/* Static keyword - to store class level data - not bound to prototype
   static properties are also possible both can be inheritaed
*/

class checkStatic {
    static name = 'sachin';
    static display() {
        console.log('check-', this.name)
    }
}

class testStatic extends checkStatic{}

//testStatic.display();
