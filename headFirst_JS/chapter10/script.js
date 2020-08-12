// function declaration
function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log("Quack!");
    }
}
quack(3);

// function expression
let fly = function (num) {
    for (let i = 0; i < num; i++) {
        console.log("Flying!");
    }
};
fly(3);

let winner = function () { alert("WINNER!") };
let loser = function () { alert("LOSER!") };
// let's test as a warm up
winner();
// let's assign to other variables for practice
let a = winner;
let b = loser;
let c = loser;
a();
b();

function checkPaid(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (!passengers[i].paid) {
            return false;
        }
    }
    return true;
}

function checkNoFly(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (onNoFlyList(passengers[i].name)) {
            return false;
        }
    }
    return true;
}

function printPassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name);
        return false;
    }
    return true;
}

//passing function to another

function sayIt(translator) {
    let phrase = translator("Hello");
    alert(phrase);
}
function hawaiianTranslator(word) {
    if (word === "Hello") return "Aloha";
    if (word === "Goodbye") return "Aloha";
}
sayIt(hawaiianTranslator);

// sort
let numbersArray = [60, 50, 62, 58, 54, 54];
numbersArray.sort(compareNumbers);
console.log(numbersArray);

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}

//descending
function compareNumbersDesc(num1, num2) {
    if (num2 > num1) {
        return 1;
    } else if (num1 === num2) {
        return 0;
    } else {
        return -1;
    }
}


// sort cola on "sold"
let products = [{ name: "Grapefruit", calories: 170, color: "red", sold: 8200 },

{ name: "Orange", calories: 160, color: "orange", sold: 12101 },
{ name: "Cola", calories: 210, color: "caramel", sold: 25412 },
{ name: "Diet Cola", calories: 0, color: "caramel", sold: 43922 },
{ name: "Lemon", calories: 200, color: "clear", sold: 14983 },
{ name: "Raspberry", calories: 180, color: "pink", sold: 9427 },
{ name: "Root Beer", calories: 200, color: "caramel", sold: 9909 },
{ name: "Water", calories: 0, color: "clear", sold: 62123 }
];

function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    }
}

function printProducts(products) {
    for (let i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name +
            ", Calories: " + products[i].calories +
            ", Color: " + products[i].color +
            ", Sold: " + products[i].sold);
    }
}

function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    }
}

function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else {
        return -1;
    }
}

function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}
products.sort(compareName);
console.log("Products sorted by name:");
printProducts(products);
products.sort(compareCalories);
console.log("Products sorted by calories:");
printProducts(products);
products.sort(compareColor);
console.log("Products sorted by color:");
printProducts(products);
products.sort(compareSold);
printProducts(products);