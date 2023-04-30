const express = require('express');
const routeFilter = require('./middleware');
const route = express.Router(); // step 1 (include this )
const app = express();

// If we want to apply as a group then do some following steps 

// step 2
route.use(routeFilter); // step 2
app.get('', routeFilter ,(req,res)=> {
    res.send("This is Home page ");
});

// step 3 : convert app to route or whereever in 
// which route we have to use just change app to route
app.get('/users', (req,res)=> {
    res.send("This is users page ");
});


route.get('/about', (req,res)=> {
    res.send("This is about page ");
});

app.use('/', route); // step 4




app.listen(4200, ()=>{
    console.log("server will listen on 4200");
})