// create a symbol

const symbol = Symbol();
const Symbol = Symbol('sym2');

console.log(typeof sym2);

// console.log(Symbol('123') === Symbol('123'));

// console.log(`hello ${sym1.toString()}`);

const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myobj = {};

myObj[KEY1] = 'Prop1';
myObj[KEY2] = 'Prop2';
myObj.key3= 'Prop3';
myObj.key4= 'Prop4';

console.log(myobj[KEY1]);
console.log(myobj[KEY2]);

// Symbols are not enumerable in for ... in

for (let i in myObj) {
    console.log(`${i}: ${myobj[i]}`);
}

// Symbols are ignored by jsin.stringify

console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));
