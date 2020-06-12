const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear']
const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];

console.log(mixed);

let val ;

// length
val = numbers.length;
// check if array
val = Array.isArray(numbers);
// get single value.
val = numbers[3];
val = numbers[0];

//insert into array
numbers[2] = 100;

//index of
val = numbers.indexOf(36);

//mutating arrays

numbers.push(250);
numbers.unshift(120);
// take off from end
numbers.pop();
//from front
numbers.shift();

//splice

numbers.splice(1, 3);
//reverse
numbers.reverse()
//cooncat arrays
val = numbers.concat(numbers2);
//sort
val = fruit.sort();
val = numbers.sort();

val = numbers.sort(function(x, y){
  return x-y;
})

//find 
function under50(num){
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
