const express = require('express');
const app = express();

// Middleware in same file .... 
// It takes three params -> first and second are 
// req & res but 3 one is next which is used 
// to call the route after middleware execution.
// Without next it will just load and not moving to next.
// Use middle ware to pass conditions 

const reqFilter = (req, res, next) => {
    // console.log('reqFilter'); // just for printing purpose 

    // writing conditions
    if(!req.query.age) 
    {
        res.send('Please Provide age');
    } 
    else if (req.query.age<18)
    {
        res.send('You cannot access this account !!!');
    }
    else {
        next(); // this will only allow to route to next page if above cond. true 
    }


    // next(); // calling it just to go to route and move ahead from middleware
}

// calling middleware

app.use(reqFilter);


app.get('', (req, res) => {
    res.send('Welcome to Home Page');
});

app.get('/users', (req, res) => {
    res.send('Welcome to Users Page');
})



app.listen(4000, ()=>{
    console.log("server is running on port number 4000");
})