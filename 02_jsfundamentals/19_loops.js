// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log('2 is my favourite number');
//     continue;
//   }
//   console.log('Number', i);

//   if (i === 5) {
//     console.log("stop the loop");
//     break;
//   }
//   console.log('Number', i);
// }

// // while loop

// let i = 0;
// while(i < 10) {
//   console.log('nummber ', i);
//   i ++;
// }

// // do while
// let i =0;
// do {
//   console.log('number', i);
//   i++;
// }
// while(i < 10);

const cars = ['ford', 'chevy', 'honda', 'toyota']
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
//for each
cars.forEach(function(car, index, array){
   console.log(`${index}: ${car}`);
   console.log(array);
})

// map
// const users = [
//   {id: 1, name: 'John'},
//   {id: 2, name: 'Sara'},
//   {id: 3, name: 'Karen'},
//   {id: 4, name: 'Steve'}
// ];
// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 40
}

for (let x in user) {
  console.log(`${x} : ${user[x]}`)
}