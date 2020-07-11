const id = 300;
// if (id == 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }
// // not equal to
// if (id != 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }

// if (id === 100) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }

// if (id !== 101) {
//   console.log('CORRECT');
// } else {
//   console.log('INCORRECT')
// }

if (typeof id !== undefined) {
  console.log(`The ID is ${id}`);
} else {
  console.log(`NO ID`);
}
if (id <= 200) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT')
}

const color = 'red';
if (color === 'red') {
  console.log('color is red');
} else if (color === 'blue') {
  console.log('color is blue');
} else {
  console.log('color is not red or blue');
}

// logical  operators

const name = 'Steve';
const age = 20;
// AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}

// || OR
if (age < 16 || age > 65) {
  console.log(`${name} can not run in race`);
} else {
  console.log(`${name} is registered for the race`);
}
// ternary operator

console.log(id === 100? 'CORRECT': 'INCORRECT');

// without braces
if (id === 100) 
  console.log('correct');
else
console.log('not correct');
