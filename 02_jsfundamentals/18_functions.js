// function declarations

function greet(fisrtName, lastName) {
  // console.log('Hello');
  return 'Hello' + fisrtName + ' ' + lastName;
}

console.log(greet('John',  'Doe'));

function greet(fisrtName, lastName) {
  if (typeof fisrtName === 'undefined') {fisrtName = 'John'}
  if (typeof lasttName === 'undefined') {lastName = 'Doe'}
  // console.log('Hello');
  return 'Hello' + fisrtName + ' ' + lastName;
}

console.log(greet('John',  'Doe'))

// function expressions

const square = function(x) {
  return x*x;
};
console.log(square(8));

// immediately invocable function expressions

(function(name) {
  console.log('IIFE Ran... '+ name)
})();

// property methods

const todo = {
  add: function() {
    console.log('add todo');
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
}

todo.delete = function() {
  console.log('Delete todo');
}

todo.add();
todo.edit(22);
todo.delete();