const firstName = 'William';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello there, my name is kk';
const tags = 'web design, web development'

let val;

val = firstName + lastName;
// concatination
val = firstName + '' + lastName;
//apppend

val = 'Brad';
val += 'Traversy';

val = 'Hello my name is ' + firstName + 'and i am ' + age;

// escaping 
val = 'That\'s awesome, I can\'t wait'

//length
val = firstName.length;

//conact

val = firstName.concat('', lastName);

//change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

val = firstName[0];

//indexof()

val = firstName.indexOf('l');
val = firstName.lastindexOf('l');

// char at

val = firstName.charAt('2');

// get last character

val = firstName.charAt(firstName.length - 1);
// substring()
val = firstName.substring(0, 4);
// slice
val = firstName.slice(0,4);
val = firstName.slice(-3);
// split 

val = str.split(' ');
val = tags.split(',');
//replace

val = str.replace('Brad', 'JAck');
// include 

val = str.includes('Hello');


console.log(val);