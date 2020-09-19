let arr = [1, 2, 3, 4, 5, 6];


// function print() {
//     let i = 0;
//     setInterval(() => {
//         console.log(arr[i % 6]);
//          i = i + 1;
//     }, 1000)
// }

// print();

//self invoking

(function print() {
    let i = 0;
    setInterval(() => {
        console.log(arr[i % 6]);
         i = i + 1;
    }, 1000)
})()

let arr = [1, 2, 3, 4, 5, 6];
(function print() {
    let i = arr.length - 1;
    setInterval(() => {

        if (i === 0) {
            i = i + (arr.length);
            console.log(arr[i % 6]);
            i = i - 1;
        } else {
            console.log(arr[i % 6]);
            i = i - 1;
        }

    }, 1000)
})()
