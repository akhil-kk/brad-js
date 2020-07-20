// const sayHello = function() {
//     console.log('Hello');

// }

// const sayHello = () => {
//     console.log('Hello');
// }

// one line function does not need braces

// const sayHello = () => console.log('Hello');

//one line returns
// const sayHello = () => 'Hello';

// Same as above
// const sayHello = function() {
//     return 'Hello';
// }

//Retun object
// const sayHello = () => ({msg: 'Hello'});

//Single parameter dont need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);

//Multiple params neeed parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`)

// sayHello('Akhil', 'KK');

// shorter 
// const users = ['Nathan', 'John', 'William'];

// const nameLengths = users.map(function(name){
//     return name.length;
// });

//shortest

// const nameLengths = users.map(name => name.length);

// console.log(nameLengths);


// modified fetch API example using arrow function

document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// get local text file data

function getText() {
    fetch('067_the_fetch_API.txt')
    .then(res => res.text())
    .then(data => {
        console.log(data);   
        document.getElementById('output').innerHTML = data; 
    })

    .catch(err => console.log(err));
}

// Get local JSON data

function getJson() {
    fetch('067_the_fetch_API.json')
    .then(res => res.json)
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach(function(post){
            output += `<li>${post.title}</li>`
        });
        document.getElementById('output').innerHTML = output;
    })

    .catch(err => console.log(err));
}

// Get from external API

function getExternal() {
    fetch('https://api.github.com/users')
    .then(res => res.json)
    .then(data => {
        console.log(data);
        let output = '';
        data.forEach(function(user){
            output += `<li>${user.login}</li>`
        });
        document.getElementById('output').innerHTML = output;
    })

    .catch(err => console.log(err));
}
