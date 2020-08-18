// setTimeout(wakeUpUser, 5000);

// function wakeUpUser() {
//     alert('Are you going to stare at this boring page forever')
// }

// let price = 28.99 // cretae a variable and assign value 28.99 to it.
// let discount = 10; // cretae a variable and assign value 10 to it.

// let total = (price * (discount / 100)); // calculate price by applying disocount.

// if (total > 25) {
//     freeshipping();  // compare total with 25. if greater then call freeshipping
// }


// let count = 10; // create variable count and assign 10 to it.
// while (count > 0) {
//     juggle();
//     count = count - 1;
// } // as long as count is greater than 0 call juggle and after reduce count by 1.

// let dog = { name: "Roger", weight: 35 }; // create an objcet called dog and give name and weight.

// if (dog.weight > 30) {  // if weight of dog is greater than 30 alert woof else alert gggg
//     alert('WOOF');
// } else {
//     alert('gggg');
// }

// let circleRadius = 20; // crreate a variable radius and assign 20 to it.

// let area = Math.PI * (circleRadius * circleRadius); // create a variable area and assign the result ot it.

// let age = 25;
// let name = 'owen';

// if (age > 14) {
//     alert('sorry this page is for kids')
// } else {
//     alert('welcome ' + name + '!')
// }

// // test for jokes

// let joke = 'kk walked into a bar';
// let toldJoke = false;
// let line = 'bettre watchoutb for those semi colons';
// let age = 20;
// let result;

// if (toldJoke == true) {
//     alert(line);
// } else {
//     alert(joke);
// }

// // Movie Night

// let zipCode = 98104;
// let favoriteMovie = 'Forbidden Planet';
// let movieTicket = 9;
// if (movieTicket >= 9) {
//     alert("Too much!");
// } else {
//     alert("We're going to see " + favoriteMovie);
// }

// while (juggling) {
//     keepBallsInAir();
// }

// while (scoops > 0) {
//     document.write("Another scoop!");
//     scoops = scoops - 1;
// }

// let scoops = 5;
// while (scoops > 0) {
//     document.write("Another scoop!");
//     scoops = scoops - 1;
// }
// document.write("Life without ice cream isn't the same");


// if (scoops >= 5) {
//     alert("Eat faster ice cream is going to melt!");
// } else if (scoops < 3) {
//     alert("Ice cream is running low!");
// }

// if (scoops >= 5) {
//     alert("Eat faster, the ice cream is going to melt");
// } else if (scoops == 3) {
//     alert("Ice cream is running low");
// } else if (scoops == 2) {
//     alert("Going twice");
// } else if (scoops == 1) {
//     alert("Going once");
// } else if (scoops == 0) {
//     alert("Gone");
// } else {
//     alert("Still lots of ice cream left, come and get it.");
// }


// //re-aaranging scrambled magbets

// let i = 0;
// let name = 'Joe';

// while (i <=2) {
//     if(i == 2 ) {
//         document.write('happy bday to you'+ ' ' + name +'<br>');
//     } else {
//         document.write('happy bday to you <br>');
//     }
//     i = i +1;
// }

// coding a serious js app

let word = "bottles";
let count = 99;
while (count > 0) {
    console.log(count + " " + word + " of beer on the wall");
    console.log(count + " " + word + " of beer,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall.");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    }
}