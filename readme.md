 ## Javascript Basics

 JS Console

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


 Variables

1. JavaScript variables were (ES5) declared using the var keyword followed by the name of the variable.
	eg: var x;
	eg: var mark = 50;

2. The variable type "Let" is similar with var but unlike var it has scope constraints.
	eg: let name = 'Akhil';	

3. "Const" is another variable type whose value cannot change throught the script.
	eg: const pi = 3.14;

 Data Types

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

  1.5

     The meaning of undefined is “value is not assigned”.
     If a variable is declared, but not assigned, then its value is undefined:

     eg: let mark;
         console.log(mark);


2. Reference Data Types
 * Accessed by reference
 * Objects that are stored on the heap
 * A pointer to a location in memory

