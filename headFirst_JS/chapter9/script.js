// window.onload = pageLoadedHandler;

// function pageLoadedHandler() {
//     alert("I'm alive!");
// }

// window.onload = init;
// function init() {
//     let image = document.getElementById("zero");
//     image.onclick = showAnswer;
// }

function init() {
    let images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
};


function showAnswer() {
    let image = document.getElementById("zero");
    image.src = "img/zero.jpg";
}