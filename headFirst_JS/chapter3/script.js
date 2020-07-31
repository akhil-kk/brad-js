
// let dogName = "kk";
// let dogWeight = 23;

// if (dogWeight > 20) {
//     console.log(dogName + " says WOOF WOOF");
// } else {
//     console.log(dogName + " says woof woof");
// }

function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}

bark('gimmy', 25);
bark('kk', 19);

// code magentes

function whatShallWear(temp) {
    if (temp < 60) {
        console.log("Wear a jacket");
    } else if (temp < 70) {
        console.log("Wear a sweater");
    } else {
        console.log("Wear t-shirt");
    }

}

whatShallIWear(60);
whatShallIWear(50);

function doIt(param) {
    param = 2;
}

let test = 1;
doIt(test);
console.log(test);

//excercise

function dogYears(dogName, age) {
    let years = age * 7;
    console.log(dogName + " is " + years + " years old");
}

let myDog = "gimmy";
dogYears(myDog, 4);

function makeTea(cups, tea) {
    console.log("Brewing " + cups + " cups of " + tea);
}

let guests = 3;
makeTea(guests, "Earl Grey");

function secret() {
    console.log("The secret of life is 42");
}

secret();

function speak(kind) {
    var defaultSound = "";
    if (kind === "dog") {
        alert("Woof");
    } else if (kind === "cat") {
        alert("Meow");
    } else {
        alert(defaultSound);
    }
}

let pet = prompt("Enter a type of pet ");
speak(pet);


// pass by value

let age = 15;

function addOne(x) {
    x = x + 1;
    console.log(x);
}

addOne(age);

// function and returns
function bake(degrees) {
    let message;
    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100) {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
        setMode("bake");
        setTemp(degrees);
    }
    return message;
}

let status = bake(350);
console.log(status);

// example 2
function calculateArea(r) {
    let area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}

let radius = 5.2;
let theArea = calculateArea(radius);
console.log("The area is: " + theArea);

// shadow your global
let beanCounter = 10;
function getNumberOfItems(ordertype) {
    let beanCounter = 0;
    if (ordertype == "order") {
        console.log('Hi')
    }
    return beanCounter;
}


function clunk(times) {
    let num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
    }
}
function thingamajig(size) {
    let facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}
function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}

let clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);


function clunk(times) {
    let num = times;
    while (num > 0) {
        display("clunk");
        num = num - 1;
    }
}

function thingamajig(size) {
    let facky = 1;
    clunkCounter = 0;

    if (size == 0) {
        display("clank");
    } else if (size == 1) {
        display("thunk");
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}
function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}

let clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);