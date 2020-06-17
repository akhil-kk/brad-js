

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// form.addEventListener('submit', runEvent);

//clear input
taskInput.value = '';

//keypress
taskInput.addEventListener('keypress', runEvent);



//keyup
// taskInput.addEventListener('keyup', runEvent);


//keydown
// taskInput.addEventListener('keydown', runEvent);

// taskInput.addEventListener('focus', runEvent);

//blur
// taskInput.addEventListener('blur', runEvent);

//cut 
// taskInput.addEventListener('cut', runEvent);

//paste
//taskInput.addEventListener('paste', runEvent);
///input
// taskInput.addEventListener('input', runEvent);
select.addEventListener('change', runEvent);

function runEvent(e){
  console.log(`Event type: ${e.type}`);
  console.log (e.target.value);

  // heading.innerText = e.target.value;

  //get inpu value
  // console.log(taskInput.value);

  // e.preventDefault();
}
 
