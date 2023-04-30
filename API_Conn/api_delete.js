const express = require('express');
const dbConnect = require('./mongo')
const app = express();

// To delete anything using id we need to use object of mongodb to make objectId instance 
const mongodb = require('mongodb');

// To getdata from request or postman we have to use middleware 
// Earlier before express 4.6 we use body-parser but now we use express.json
app.use(express.json());

// app.get('/', async (req, resp)=>{
//     let data =await dbConnect();
//     data = await data.find().toArray();
//     console.log(data);
//     resp.send(data);
// })

// API Post 
// app.post('/', async (req, res)=>{

//     let data = await dbConnect();
//     let result = await data.insertOne(req.body); // req.body is used to get data send from postman
//     res.send(result);
    
// })

// API Put Method 
// app.put("/:name", async (req, res)=>{

//     // console.log(req.body)
//     let data = await dbConnect();
//     let result = await data.updateOne(
//         // {name: "m-16 pro"},
//         // {name: req.body.name}, // this will get name from postman request means dynamic data 
//         {name: req.params.name}, // this will get name from postman request means dynamic data 
//         {$set: req.body}
//     )
//     res.send({result:"updated"});
// })

// API Delete Method 
app.delete("/:id", async (req, res)=>{

    // console.log(req.params.id)
    let data = await dbConnect();
    let result = await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})
    res.send(result);
})



app.listen(4040, ()=>{
    console.log("Serever is active on port number 4040");
})