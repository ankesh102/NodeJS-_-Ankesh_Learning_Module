// Creating Post API with the help of mongoose in Node-JS

const express = require("express");
require("./config");
const Products = require("./product");

const app = express();

// To get req.body
app.use(express.json());

// Post Method 
app.post("/create", async (req, resp) => {
  const data = new Products(req.body);
  const result = await data.save();

  console.log(req.body);
  resp.send(result); // to send response to postman
});


// Get Method 

app.get("/list", async (req, resp) => {

    let data = await Products.find();
    resp.send(data);
})

// delete Method 
app.delete("/delete/:_id", async(req, resp) => {
  console.log(req.params);
  let data = await Products.deleteOne(req.params);
    resp.send(data);
})

app.put("/put/:_id", async (req, resp) => {

    let data = await Products.updateOne(
      req.params,
      {$set: req.body}
    )

    resp.send(data);

})




app.listen(5000, () => {
  console.log("Server will listen on port 5000");
});
