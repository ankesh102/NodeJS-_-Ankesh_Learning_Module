// In this module we are going to learn how we can create search API using single and multiple field.

const express = require("express");
require("./config");
const Products = require("./product");
const app = express();

// To use req params we have to write this 
app.use(express.json());

// Create get route 
app.get("/search/:key", async (req, resp) => {

    console.log(req.params.key);
    let data = await Products.find(
    // To search our data we have to use "regex"
    {
        "$or": [
            { "name" : {$regex:req.params.key}},
            { "brand" : {$regex:req.params.key}}, // For searching multiple fields we have to include this.
            // Above line of code help to search simliar result what we pass ar query params , they will seacrh and display as output
            { "category" : {$regex:req.params.key}}, 
        ]
    } 
    );
    
    resp.send(data);
})


app.listen(5000, ()=>{
    console.log("Server will listen on port 5000");
});