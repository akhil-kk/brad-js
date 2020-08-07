let header = document.getElementById("header");
if (header == null) {
    console.log('no header found');
}

let weather = document.getElementById("weatherDiv");
if (weather != null) {
    console.log('no weather data found');
}

// dealing with NaN

if (myNum == NaN) {
    myNum = 0;
} // This is wrong Nan cant be equal to anythin.

if (isNaN(myNum)) {
    myNum = 0;
}

var test11 = 0 / 0;
console.log(test11);

let x = 'hello';
let result = isNaN(x);
console.log(result);

if (99 === "99") {
    console.log("A number equals a string!");
} else {
    console.log("No way a number equals a string");
}

let plusi = "4" + 3; // concatination happens

let multi = 3 * "4";

let divi = 80 / "10";

let mini = "10" - 5;
function findCarInLot(car) {
    for (var i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }
    }
    return -1;
}

let chevy = {
    make: "Chevy",
    model: "Bel Air"
};

let taxi = {
    make: "Webville Motors",
    model: "Taxi"
};

let fiat1 = {
    make: "Fiat",
    model: "500"
};

let fiat2 = {
    make: "Fiat",
    model: "500"
};

let lot = [chevy, taxi, fiat1, fiat2];
let loc1 = findCarInLot(fiat2);
let loc2 = findCarInLot(taxi);
let loc3 = findCarInLot(chevy);
let loc4 = findCarInLot(fiat1);


function lieDetectorTest() {
    let lies = 0;
    let stolenDiamond = {};
    if (stolenDiamond) {
        console.log("You stole the diamond");
        lies++;
    }

    let car = {
        keysInPocket: null
    };

    if (car.keysInPocket) {
        console.log("Uh oh, guess you stole the car!");
        lies++;
    }

    if (car.emptyGasTank) {
        console.log("You drove the car after you stole it!");
        lies++;
    }

    let foundYouAtTheCrimeScene = [];

    if (foundYouAtTheCrimeScene) {
        console.log("A sure sign of guilt");
        lies++;
    }

    if (foundYouAtTheCrimeScene[0]) {
        console.log("Caught with a stolen item!");
        lies++;
    }

    let yourName = " ";

    if (yourName) {
        console.log("Guess you lied about your name");
        lies++;
    }
    return lies;
}

let numberOfLies = lieDetectorTest();
console.log("You told " + numberOfLies + " lies!");

if (numberOfLies >= 3) {
    console.log("Guilty as charged");
}

// equal to operator

if (99 == "99") {
    console.log("A number equals a string!");
} else {
    console.log("No way a number equals a string");
}

// 
let text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
let presentableText = text.toLowerCase();
if (presentableText.length > 0) {
    alert(presentableText);
}

let emot = "XOxxOO";
let hugs = 0;
let kisses = 0;
emot = emot.trim();
emot = emot.toUpperCase();

for (let i = 0; i < emot.length; i++) {
    if (emot.charAt(i) === "X") {
        hugs++;
    } else if (emot.charAt(i) == "O") {
        kisses++;
    }
}

// equality test

if ("0" == false) {
    console.log('hi');
}

if ("42" == 42) {
    console.log('hi');
}

if (null == undefined) {
    console.log('hi');
}

if (99 == 'vanila') {
    console.log('hi');
}

if ("true" == true) {
    console.log('hi');
}

let order = 1 + 2 + " pizzas";
console.log(order);

let text = "YOU SHOULD NEVER SHOUT WHEN TYPING";
let presentableText = text.toLowerCase();
if (presentableText.length > 0) {
    console.log(presentableText);
}

let name = "Jenny";
let phone = "867-5309";
let fact = "This is a prime number";
let songName = phone + "/" + name;
let index = phone.indexOf("-");
if (fact.substring(10, 15) === "prime") {
    alert(fact);
}

let arr = [];

if (arr) {
    console.log('true');
}

// string methods
let input = "jenny@wickedlysmart.com";
for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "@") {
        console.log("There's an @ sign at index " + i);
    }
}

let phrase = "the cat in the hat";
let index = phrase.indexOf("cat");
console.log("there's a cat sitting at index " + index);

// substring
let data = "name|phone|address";
let val = data.substring(5, 10);   // gets string from 5 to 10 (not including 10)
console.log("Substring is " + val);