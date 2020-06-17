//create element

const li = document.createElement('li');

// add class
li.className = 'new-item';

// add attribute
li.setAttribute('title', 'New Item');

// create text node and append

li.appendChild(document.createTextNode('Hello world'));
// create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';
// add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'

//append link to li
li.appendChild(link);


// append li as child to ul
document.querySelector('ul.collection').appendChild(li);

console.log(li);