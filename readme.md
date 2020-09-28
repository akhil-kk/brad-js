 ## Javascript Basics

 ### JS Console

The console object provides us with several different methods, like :

1. log() -  used to print the output to the console.

	`eg: console.log('abc');`

2. error() - Used to log error message to the console.

	`eg: console.error('This is an error');`

3. warn() - Used to log warning message to the console.

	`eg: console.warn('This is a warning.');`

4. clear() - Used to clear the console.

	`eg: console.clear();`

5. time() and timeEnd() - to know the amount of time spend by a block or a function.

```
eg: console.time('hello');
      console.log('hello world');
      console.log('hello world');
      console.log('hello world');
      console.log('hello world');
      console.log('hello world');
      console.log('hello world');
      console.log('hello world');
    console.timeEnd('hello);
  ```


## Variables

1. JavaScript variables were (ES5) declared using the var keyword followed by the name of the variable.
```
	eg: var x;
	eg: var mark = 50;
```

2. The variable type "Let" is similar with var but unlike var it has scope constraints.
`eg: let name = 'Akhil';`	

3. "Const" is another variable type whose value cannot change throught the script.
`eg: const pi = 3.14;`

### Data Types

1. Primitive Data Types
 * Stored directly in the location the variable accesses.
 * Stored on the stack.

  1.1 String
    A string in JavaScript must be surrounded by quotes.

    Double quotes: "Hello"
    Single quotes: 'Hello'

  1.2 Number
    The number type represents both integer and floating point numbers.
    
    let n = 1212;
    n = 3.14;
  
  1.3 Boolean
  The boolean type has only two values: true and false.
    
    eg: let flag = true;
        let isPrime = false;

  1.4 Null
  It’s a value which represents “nothing”, “empty” or “value unknown”.
   
     let mark = null;

  1.5  Undefined
  The meaning of undefined is “value is not assigned”.
  If a variable is declared, but not assigned, then its value is undefined:

     eg: let mark;
         console.log(mark);


2. Reference Data Types
 * Accessed by reference
 * Objects that are stored on the heap
 * A pointer to a location in memory

 ## Important Points to note.

 * **This** - The JavaScript this keyword refers to the object it belongs to.
 eg:
 ```
 const test = {
  prop: 42,
  func: function() {
    return this.prop;
  },
};

console.log(test.func());
```
 * **A Promise** is an object representing the eventual completion or failure of an asynchronous operation.Essentially, a promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

    * A Promise is in one of these states:

    * pending: initial state, neither fulfilled nor rejected.
    * fulfilled: meaning that the operation was completed successfully.
    * rejected: meaning that the operation failed.
    
 * **A callback function** is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
 eg:
 ```
 function greeting(name) {
  alert('Hello ' + name);
}

function processUserInput(callback) {
  var name = prompt('Please enter your name.');
  callback(name);
}

processUserInput(greeting);
```
### bind()

* The bind() method creates a new function where “this” refers to the parameter in the parenthesis in the above case “car”. This way the bind() method enables calling a function with a specified “this” value.

```
let car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(ownerName){
        console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
    }
}

var myCarDetails = car.displayDetails.bind(car, "Vivian");
```

### apply()
* This time there is a car object without the displayDetails function, which is located in the global context.

```
displayDetails.apply(car, ["Vivian"]);
```

### call()

```
displayDetails.call(car, "Vivian");

```
### currying

* Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.

```
function volume(length) {
      return function(width) {
         return function(height) {
            return height * width * length;
         }
      }
   }
console.log(volume(11)(2)(3));

```

### itertaors
* loops that can be paused

```
function  nameIterator(names) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < names.length ?
            {value: names[nextIndex++], done: false} :
            {done: true}
        }
    }
}


const namesArr = ['jack', 'jill', 'john'];
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);
```

### Generators

```
function* sayNames() {
  yield 'jack';
  yield 'jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value);
```








