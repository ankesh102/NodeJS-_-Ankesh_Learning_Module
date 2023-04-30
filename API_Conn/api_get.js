const express = require('express');
const dbConnect = require('./mongo')
const app = express();

app.get('/', async (req, resp)=>{
    let data =await dbConnect();
    data = await data.find().toArray();
    console.log(data);
    resp.send(data);
})

app.listen(4040, ()=>{
    console.log("Serever is active on port number 4040");
})