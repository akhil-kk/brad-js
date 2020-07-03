// // Iterator example

// function nameIterator() {
//     let nextIndex = 0;

//     return {
//         next: function() {
//             return nextIndex < names.length ? {value: names[nextIndex++], done: false} : {done: true}
//         }
//     }
// }

// // create an array of names

// const namesArr = ['Jack' 'Jill', 'John'];

// //init oiterator and pass in the names array

// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// function* sayNames() {
//     yield 'jack';
//     yield 'jill';
//     yield 'john';
// }

// const name = sayNames();
// console.log(name.next().value);

// ID creater

function* createids() {
    let index = 0;

    while(true) {
        yield index++;
    }
}

const gen = createIds();
console.log(gen.next().value);