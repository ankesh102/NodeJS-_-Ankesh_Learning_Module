// To import that app.js file into it.
// const app = require('./app');

// console.log(app); // To print all data present in app file
// console.log(app.z()); // to print specific data


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// arr.filter((item) => {
//     console.log(item);
// })

// This is used to check some value stored in it or not 
let result = arr.filter((item)=>{
    return item > 3;
})

console.log(result);