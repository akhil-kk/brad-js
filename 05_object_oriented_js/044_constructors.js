// const akhil = {
//     name: 'Akhil',
//     age: 26
// }

// console.log(akhil.name);
// console.log(akhil.age);

// person constrcutor

function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);  
    }
}

// const akhil = new Person('Akhil', 22);
// const Don = new Person('Don', 22);

const akhil = new Person('Akhil', '12-12-1993');
console.log(akhil.calculateAge());


