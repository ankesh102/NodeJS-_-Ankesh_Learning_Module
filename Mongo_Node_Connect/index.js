
// Reading data from MongoDB and connection code on different file.

const dbConnect = require('./mongodb_conn');

// First method to  handle Promise 
// dbConnect().then((resp) => {
//   // console.log(resp.find().toArray()); // If we write only this then promise won't be fullfilled
//   resp
//     .find()
//     .toArray()
//     .then((data) => {
//       console.log(data);
//     });
// });


// Second method to handle Promises 
// Using Functions we are getting all the data 
const main = async () => {
    let data = await  dbConnect();
    data = await data.find().toArray();
    console.log(data);
}

main();