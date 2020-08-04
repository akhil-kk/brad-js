
//sample object
var chevy = {
    make: "Chevy",
    model: "Bel Air",
    year: 1957,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1021
};

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

let miles = fiat.mileage;
if (miles < 2000) {
    buyIt();
}

// change property
fiat.mileage = 10000;


//add a property
fiat.needsWashing = true;

if (fiat.year < 1965) {
    classic = true;
}
for (let i = 0; i < fiat.passengers; i++) {
    addPersonToCar();
}

var dog = {
    name: "fido",
    weight: 20.2,
    age: 6,
    breed: "mixed",
    activity: "fetch balls"
};

let bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}
let speak = dog.name + " says " + bark + " when he wants to " + dog.activity;
console.log(speak);

// delete a property
delete fido.dogYears;

function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

let worthALook = prequal(taxi);

if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}

//passing an object to a fn

function makeCar() {
    let makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    let models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    let years = [1955, 1957, 1948, 1954, 1961];
    let colors = ["red", "blue", "tan", "yellow", "white"];
    let convertible = [true, false];
    let rand1 = Math.floor(Math.random() * makes.length);
    let rand2 = Math.floor(Math.random() * models.length);
    let rand3 = Math.floor(Math.random() * years.length);
    let rand4 = Math.floor(Math.random() * colors.length);
    let rand5 = Math.floor(Math.random() * 5) + 1;
    let rand6 = Math.floor(Math.random() * 2);
    let car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    };
    return car;
}
function displayCar(car) {
    console.log("Your new car is a " + car.year + " " + car.make + " " + car.model);
}
var carToSell = makeCar();
displayCar(carToSell);

//methods
let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    drive: function () {
        alert.log("Zoom zoom!");
    }
};

fiat.drive();

// improving the car function

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            alert("Zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    }
};

// example 2

let fiat = {
    make: "Fiat",
    model: "500",
    // other properties go here, we're saving some paper...
    started: false,
    fuel: 0,
    start: function () {
        this.started = true;
    },

    stop: function () {
        this.started = false;
    },

    drive: function () {
        if (this.started) {
            alert(this.make + " " + this.model + " goes zoom zoom!");
        } else {
            alert("You need to start the engine first.");
        }
    },

    addFuel: function (amount) {
        this.fuel = this.fuel + amount;
    }
};

let eightBall = {
    index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function () {
        this.index = this.index + 1;
        if (this.index >= this.advice.length) {
            this.index = 0;
        }
    },
    look: function () {
        return this.advice[this.index];
    }
};

eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());

// excercise
let song = {
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function () {
        if (!this.playing) {
            this.playing = true;
            console.log("Playing "
                + this.name + " by " + this.artist);
        }
    },
    pause: function () {
        if (this.playing) {
            this.playing = false;
        }
    }
};
song.play();
song.pause();