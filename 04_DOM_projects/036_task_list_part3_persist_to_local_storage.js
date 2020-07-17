// define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const fiter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
  // DOM load event

  document.addEventListener('DOMContentLoaded', getTasks);

  // add task event
  form.addEventListener('submit', addTask);
  // remove task event
  taskList.addEventListener('click', removeTask);
  // clear task event
  clearBtn.addEventListener('click', clearTasks);
  //filter tasks event
  filter.addEventListener('keyup', filterTasks);
}
// Get atsks from LS

function getTasks() {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // create li elements

    const li = document.createElement('li');

    // add a class

    li.className = 'collection-item';

    //create text node and append to li

    li.appendChild(document.createTextNode(task));

    // create new link element

    const link = document.createElement('a');

    // Add class
    link.className = 'delete-item secondary-content';

    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // Append link to li
    li.appendChild(link);

    // Append li ul
    taskList.appendChild(li);

  })
}


// add task

function addTask(e) {
  if (taskInput.value === '') {
    alert('Add a task');
  }

  // create li element
  const li = document.createElement('li');

  // add class
  li.className = 'collection-item';

  //create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));

  // create new link element
  const link = document.createElement('a');

  // add class
  link.className = 'delete-item secondary-content';

  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';

  // Append the link to li
  li.appendChild(link);

  // append li ul
  taskList.appendChild(li);

  //Store in local storage
  storeTaskInLocalStorage(taskInput.value);

  // clear input
  taskInput.value = '';

  e.preventDefault();
}

// Store task

function storeTaskInLocalStorage(task) {
  let tasks;
  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// remove task

function removeTask(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure')) {
      e.target.parentElement.parentElement.remove();

      // remove from local storage
      removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }

  //Remove from ls

  function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function (task, index) {
      if (taskItem.textContent === task) {
        tasks.splice(index, 1);
      }
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}

// clear task
function clearTasks() {
  // taskList.innerHTML = '';
  // faster
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}

// filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    // console.log(item, "hello");
    if (item.toLowerCase().indexOf(text) != -1) {
      console.log(item.toLowerCase().indexOf(text));
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  })
}
