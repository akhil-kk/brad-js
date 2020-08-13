
let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
};

// constructors
let dog = {
    name: "Fido",
    breed: "Mixed",
    weight: 38
};

function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            console.log(this.name + " says Woof");
        } else {
            console.log(this.name + " says Yip");
        }
    }
}

let kk = new Dog("kk", "Mixed", 38);
let Arjun = new Dog("Arjun", "Poodle", 30);

kk.bark();
console.log(Arjun);

//constructor excercise

function Coffee(roast, ounces) {
    this.roast = roast;
    this.ounces = ounces;
    this.getSize = function () {
        if (this.ounces === 8) {
            console.log('small')
        } else if (this.ounces === 12) {
            console.log('medium');
        } else if (this.ounces === 16) {
            console.log('medium');
        }
    }
}

let houseBlend = new Coffee("House Blend", 12);
houseBlend.getSize();
let darkRoast = new Coffee("Dark Roast", 16);
darkRoast.getSize();

//reworking car constructors

function Car(data) {
    this.model = data.model;
    this.engine = data.engine;
    this.color = data.color;
    this.cc = data.cc;
    this.mode = data.mode;
    this.ignition = function () {
        this.mode = 'start';
    }
}

let newCar = {
    model: 2016,
    engine: '8 cylinder',
    color: 'black',
    cc: 1600,
    mode: 'park',
}
let car1 = new Car(newCar);
console.log(car1);