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