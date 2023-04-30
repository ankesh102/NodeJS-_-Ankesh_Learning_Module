// Product database table/collection ki model aur schema is module me rahegi 

const mongoose = require('mongoose');

// Schema declaration 
const ProductSchema = new mongoose.Schema({
    name: String, 
    brand: String,
    price: Number, 
    category: String
});

// Model Declaration
const Products = mongoose.model('products', ProductSchema); // 1 params : db collection name ; 2 params name : Schema decl. name 

module.exports = Products;

// OR we can also write model like this only 
// module.exports = mongoose.model('products', ProductSchema);


