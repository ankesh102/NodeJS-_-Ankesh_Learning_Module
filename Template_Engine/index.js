// In this module we are going to talk about Template Engine
// Basically which is a npm package whivh is used for dynamic pages -> means 
// data fetch from backend in order to display over page 

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

// Setting Template Engine -> means making aware our node that we are using template engine
app.set('view engine', 'ejs'); // In first param mention which engine we are using and 2 param -> mentioned which package we are using.

// app.get('', (req, res)=>{

//     res.sendFile(`${publicPath}/index.html`);
// });

// Dynamic Pages 
app.get('/Profile', (req, res)=>{

    // In Place of Database data 
    // Just simply write some static data here
    const user = {
        name : "Ankesh Pandey",
        email: "aneksh@test.com",
        phone: "7903332869",
        skills: ['php','java','c++','Mongo','python'],
    }

    res.render('Profile',{user});
}); 

app.get('/Login', (_, res)=> {

    res.render('Login');
})


app.listen(5050);
