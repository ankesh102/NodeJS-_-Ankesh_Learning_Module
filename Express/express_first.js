
// import express

const express = require('express');

const app = express(); // to make function executable we need to write this.

// get method is used to create web page
app.get('/', (req, res)=>{
    console.log("Data recieved from browser =>>> ", req.query.name);// Data Recieved from name which is pass as a query parameter.
    // res.send("<h1> This , is Home Page !!! </h1>")
    res.send("<h1> This , is "+req.query.name) ; // Send that data in response to browser
});

app.get('/about', (req, res)=>{
    res.send("<h1> Kya Haal Chal Bhai.....!!! About Bhai </h1>")
});



app.listen(5000, ()=>{
    console.log("Server will listen on port 5000");
})