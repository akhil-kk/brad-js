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