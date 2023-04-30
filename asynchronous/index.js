// console.log("start execution ... !!!");


// setTimeout(() => {
//     console.log("logic execution ... !!!");
// }, 2000);

// console.log("complete execution ... !!!");

// It wont wait for second execution to complete in 2 sec,
//  which makes it a fast as JS is also Asynchronous. 


// Concept of Promises -> It will solve the error wich occur due  to async property of Node
// and wait for b to update then show the output... earlier it was not possible  

// var a = 20;
// var b = 0;

// const waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30); // updating some data 
//     }, 2000);
// })

// if promises return success means resolve then it will give c
// orrrect output else error or wrong output will be shown 
// waitingData.then((data)=>{
//     b = data;
//     console.log(a+b);
// })

// console.log("complete execution ... !!!");

console.log("Startig Up !!!");

setTimeout(() => {
    console.log("2 sec execution ");
},2000);

setTimeout(()=>{
    console.log("0 sec delay");
},0);

console.log("finish console.");