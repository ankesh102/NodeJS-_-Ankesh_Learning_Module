// In this module we are going to perform How we can actually perform cord operation
// with the help of mongoose

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/e-commerce");

const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  brand: String,
});

const saveInDB = async () => {
  const productModel = mongoose.model("products", productsSchema);
  let data = new productModel({
    name: "Redmi note 9 pro",
    price: 10000,
    category: "mobile",
    brand: "Xiaomi",
  });

  let result = await data.save();
  console.log(result);
};
// saveInDB();

const updateInDB = async () => {
  const productModel = mongoose.model("products", productsSchema);
  let data = await productModel.updateOne(
    { name: "I phone13" },
    { $set: { name: "I pad pro", price: 3456 } }
  );
  console.log(data);
};
// updateInDB();

const deleteInDB = async () => {
    const products = mongoose.model('products', productsSchema);
    // let data = await products.deleteOne({name:"v-20 pro"}); // For deleting one data 
    let data = await products.deleteMany({name:"poco c14"}); // For deleting multiple data having that name  

    console.log(data);

}
// deleteInDB();

const findInDB = async () => {
    const Products = mongoose.model('products', productsSchema);
    let data = await Products.find();
    console.log(data);
}

findInDB();
