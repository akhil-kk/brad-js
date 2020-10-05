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

// const arr = [1, 4, 9, 16];
// const map1 = arr.map(x => x * 2);
// console.log(map1);
// // Array.reduce

// let red = arr.reduce(fun)
// console.log(red);

// function fun(acc, val) {
//     console.log('acc', acc);
//     console.log('val', val);
//     return acc + val;
// }

// function volume(length) {
//     return function(width) {
//        return function(height) {
//           return height * width * length;
//        }
//     }
//  }
// // console.log(volume(11)(2)(3));
// console.log(volume(3));

// iterator
// function  nameIterator(names) {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ?
//             {value: names[nextIndex++], done: false} :
//             {done: true}
//         }
//     }
// }


// const namesArr = ['jack', 'jill', 'john'];
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// let obj = {
//     name: "Akhil",
//     number: 12
// }

// const {name, number} = obj;

// console.log(name, number);


// iterators

// function nameIterator(names) {
//     let nextIndex = 0;
//     return {
//         next: function() {
//             return nextIndex < names.length ? 
//             {value: names[nextIndex++], done: false} : 
//             {done: true};
//         }
//     }
// }

let namesArr = ['kk', 'arjun', 'nikhil'];
let names = nameIterator(namesArr);
console.log(names.next());
console.log(names.next());
console.log(names.next());
console.log(names.next());

const makeCounter = () => {
    let count = 0;
    const counter = () => count++;
    return counter;
}

let cnt = makeCounter();
console.log(cnt());
console.log(cnt());
console.log(cnt());


let arr = 'abc, @kjdwldhlw @ adkjdhww @ldh';
let x = arr.split(',');
console.log(x.join(','));

function fun(acc, val) {
    console.log('acc', acc);
    console.log('val', val);
    return acc + val;
}
const arr = [1, 4, 9, 16];
let red = arr.reduce(fun)
console.log(red);

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hello world')
    }, 1000)
});

promise.then((data => console.log(data)));

const promise = new Promise((resolve, reject) => {
    if(true) {
        resolve('success');
    } else {
        reject('failed');
    }
})

promise
.then(data => {
    throw Error}
    ).catch(()=> console.log('error'));



let arr = [12, 34, 54, 2, 5];
let x = arr.sort((a, b) => (b - a));
console.log(x);

setInterval(() => {
    console.log('hi')
}, 1000);