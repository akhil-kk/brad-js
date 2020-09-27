// prmoises 
// api from json placeholder

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(item => console.log(item))

// // using async and await

// async function readUsers() {
//     let res = await fetch('https://jsonplaceholder.typicode.com/users');
//     let data = await res.json();
//     console.log(data);
// }
// readUsers();

// spread operator
// expanding arrays

// let greet = ['hello', 'world'];
// console.log(...greet);
// let word = 'hellow world'
// console.log([...word]);

// const sum = (num1, num2, num3) => {
//     let result = num1 + num2 + num3;
//     return result;
// }

// let arr = [1, 2, 3];
// console.log(sum(...arr));

// array.map function
// pass function to map

const arr = [1, 4, 9, 16];
const map1 = arr.map(x => x * 2);
console.log(map1);
// Array.reduce

let red = arr.reduce(fun)
console.log(red);

function fun(acc, val) {
    console.log('acc', acc);
    console.log('val', val);
    return acc + val;
}
