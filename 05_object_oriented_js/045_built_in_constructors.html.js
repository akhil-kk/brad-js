// strings

const name1 = 'Jeff';
const name2 = new String('Jeff');

// name2.foo = 'bar';
console.log(name1);
console.log(name2);

console.log(typeof name1);

if(name1 === 'jeff') {
    console.log('YES');
} else {
    console.log('NO');
}

//Number
const num1 = 5;
const num2 = new Number(5);
console.log(num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// function
const getSum1 = function(x, y) {
    return x + y;
}

const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum1(1, 1));

// object
const john1 = {name: 'John'}
const john2 = new Object({name: 'John'});
console.log(john2);

// Arrays

const arr1 = [1, 2, 3, 4];
const arr2 = new Array[1, 2, 3, 4];

// regular expressions
const rel = /\w+/;
const re2 = new RegExp('\w+');

console.log(re2);

