// Importing MongoDB Connection 
const dbConnect = require('./mongodb_conn');


const updateData = async  () => {

    let data = await dbConnect();
    // let result = data.updateOne({brand: "oneplus"},{$set : {brand: "Ankeshplus"}}); // To update single data 
    // let result = data.updateMany({brand: "oneplus"},{$set : {brand: "Ankeshplus"}}); // To update Multiple data 
    let result = await data.updateMany({brand: "Ankeshplus"},{$set : {brand: "Ankeshplus", name:"nord celite"}}); // To update Multiple data 
     console.log(result);
}

updateData();
