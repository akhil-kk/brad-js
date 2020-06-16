// document.getElementById()

console.log(document.getElementById('task-title'));

//get things from the element
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');


// change styling
taskTitle.style.background = '#333';
taskTitle.style.color = '#fff';
taskTitle.style.padding = '5px';
// document.getElementById('task-title').style.display = 'none'

// change the content
taskTitle.textContent = 'Task List';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// document.queryselector
console.log(document.getElementById('#task-title'));
console.log(document.getElementById('.card-title'));
console.log(document.getElementById('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'red';
document.querySelector('li:last-child').style.color = 'blue';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'Hellow World';
document.querySelector('li:nth-child(even)').style.background = '#ccc';
 