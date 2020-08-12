
function handler() {
    alert("Yeah, that page loaded!");
}
window.onload = handler;

// assigning directly

window.onload = function () {
    alert("Yeah, that page loaded!");
};

// sharpen your pencil

window.onload = function () {
    let button = document.getElementById("bake");
    button.onclick = handleButton;
}

let cookies = {
    instructions: "Preheat oven to 350",
    bake: function (time) {
        console.log("Baking the cookies");
        setTimeout(done, time);
    }
};

function handleButton() {
    console.log("Time to bake the cookies.");
    cookies.bake(2500);
}

function done() {
    alert("Cookies are ready, take them out to cool");
    console.log("Cooling the cookies");
    let cool = function () {
        alert("Cookies are cool, time to eat");
    };
    setTimeout(cool, 1000);
}

// example two
function cookieAlarm() {
    alert("Time to take the cookies out of the oven");
};

setTimeout(cookieAlarm, 600000);

// can be modified as
setTimeout(function () {
    alert("Time to take the cookies out of the oven");
}, 600000);

// hoisting and function expressions

let migrating = true;

if (migrating) {
    quack(4);
    fly(4);
}

function quack(num) {
    for (i = 0; i < num; i++) {
        console.log("Quack!");
    }
}

let fly = function (num) {
    for (i = 0; i < num; i++) {
        console.log("Flying!");
    }
};

// since function expression fly is validated only after invoking fly we will get undefined.

// scope

let justAVar = "Oh, don't you worry about it, I'm GLOBAL";
function whereAreYou() {
    let justAVar = "Just an every day LOCAL";
    return justAVar;
}
let result = whereAreYou();
console.log(result);

// counter -- using closures

function makeCounter() {
    let count = 0;
    function counter() {
        count = count + 1;
        return count;
    }
    return counter;
}