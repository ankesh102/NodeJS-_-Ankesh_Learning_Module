// In this module we are working with static data
// and we are going to see how we can restrict to enter data more then requred field.

// Database  ki feild define hoti hai schema ke andar taki unpe validation lga ske hm.
// models is used to connect node with mongodb using that schema.

const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");
    // const productsSchema = new mongoose.Schema({
    //     name:String
    // });
    const productsSchema = new mongoose.Schema({ // SChema me validation lga diya hmne statsic data ke saath.
        name:String,
        price: Number
    });
    const productModel = mongoose.model('products', productsSchema); // ye model mongodb ko node se connect kr diya
    let data = new productModel({name: "poco c14", price: 1200}); // Here price won't be added to db because only name has been declared inside schema
    // Lekin 2 schema bannae ke baad ye bhi add ho jayega .
    let result = await data.save(); // ye result db me save ho jayega is code se.
    console.log(result);
}

main();