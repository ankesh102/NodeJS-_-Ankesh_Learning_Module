// In this module we are going to access a folder 
// so, when we are accessing any folder then we can also access all the files reside there.

const express = require('express');
const path = require('path');

const app = express();

// Access path of folder where HTMl files were presnent 
const publicPath = path.join(__dirname, 'public');
// console.log(publicPath); // To check whether we get accurate path or not 

// Now we use app.use method to render HTML Pages accessing from folder via Path.
app.use(express.static(publicPath)); // static method is use to load the static /pages content i.e HTML pages.

app.listen(5500,() => {
    console.log("Server will listen on port 5500");
})