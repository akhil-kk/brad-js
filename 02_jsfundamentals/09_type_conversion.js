let val;

// number to string
val = String(5);
val = String(4+4);
//boolean to string

val = String(true);
val = String(new Date)
// Array to string
val = String([1, 2, 3, 3]);
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('hello');

val = parseInt('100.45');
val = parseFloat('100.30');

//output
console.log(val);
console.log(typeof val);
// console.log(val.length);
console.log(val.toFixed());

const val1 = 5;
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);