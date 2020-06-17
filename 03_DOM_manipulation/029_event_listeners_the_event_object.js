// document.querySelector('.clear-tasks').addEventListener('click', 
// function(e){
//   console.log('Hello world');
//   e.preventDefault();
// });

document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e){
  // console.log('clicked');

  let val;
  val = e;

  //Event target element
  val = e.target
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  //event type
  val = e.type;

  // timestamp
  val = e.timeStamp;

  // cordinates event relative to the window
  val = e.clientY;
  val = e.clientX;

   // cordinates event relative to the element
   val = e.offsetY;
   val = e.offsetX;

  console.log(val);
}