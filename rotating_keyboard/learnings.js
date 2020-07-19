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
