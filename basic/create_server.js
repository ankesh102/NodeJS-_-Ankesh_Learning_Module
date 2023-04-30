const http = require('http');

// CreateServer takes 2 parameter 
// 1. which include function inside it
// 2. which takes on which port our function is running.
http.createServer((req,res)=>{
    res.write("<h1>This is nodemon Ankesh Pandey first server !!!</h1>")
    res.end();
}).listen(4500);


// This below console function is to check weather our server has started or not 
// listen(5000,()=>{console.log("Server running on port 5000")}