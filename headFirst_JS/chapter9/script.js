// window.onload = init;

// function pageLoadedHandler() {
//     alert("I'm alive!");
// }

// window.onload = init;
// function init() {
//     let image = document.getElementById("zero");
//     image.onclick = showAnswer;
// }

// image guessing game

// function init() {
//     let images = document.getElementsByTagName("img");
//     for (let i = 0; i < images.length; i++) {
//         images[i].onclick = showAnswer;
//     }
// };


// function showAnswer() {
//     let image = document.getElementById("zero");
//     image.src = "img/zero.jpg";
// }

// function showAnswer(eventObj) {
//     let image = eventObj.target;
//     let name = image.id;
//     console.log(name);
//     name = name + ".jpg";
//     image.src = "img/"+ name;
// }

// function timerHandler() {
//     alert("Hey what are you doing just sitting there staring at a blank screen?");
// }

// setTimeout(timerHandler, 5000);

// let tick = true;
// function ticker() {
//     if (tick) {
//         console.log("Tick");
//         tick = false;
//     } else {
//         console.log("Tock");
//         tick = true;
//     }
// }
// setInterval(ticker, 1000);


// window.onload = function () {
//     let images = document.getElementsByTagName("img");
//     for (let i = 0; i < images.length; i++) {
//         images[i].onclick = showAnswer;
            // images[i].onmouseover = showAnswer;
            // images[i].onmouseout = reblur;
//     }
// };

// function showAnswer(eventObj) {
//     let image = eventObj.target;
//     let name = image.id;
//     name = name + ".jpg";
//     image.src = "img/" + name;
//     setTimeout(reblur, 2000, image);
// }

// function reblur(image) {
//     let name = image.id;
//     name = name + "blur.jpg";
//     image.src = "img/" + name;
// }

let addOne = function (x) {
    console.log(x);
    return x + 1;
};
let six = addOne(5);