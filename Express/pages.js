// In this Section we will learn How we can render HTML and JSON file as a response.

const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send(`
        <h1> This is Ankesh Pandey !!!</h1>
        <a href='/jaosaopart'>Go to jaosaopart page</a>
    `);
})

app.get('/about', (req, res)=>{
    res.send(`
        <h1 style={color:'red'}> This is Ankesh Pandey !!!</h1>
    `);
})

app.get('/input', (req, res)=>{
    res.send(`
        <input type='text' placeholder='user Name' value="${req.query.name}" />
        <button > Click Me </button>
    `);
})

// One data
app.get('/jaosao', (req, res)=>{
    res.send({
        name: "Ankesh",
        email: 'ankesh@test.com',
        Add: 'Garhwa, Jharkahnd'
    });
})

// More then one data  -> Two object in an array 
app.get('/jaosaopart', (req, res)=>{
    res.send([
        {
            name: "Ankesh",
            email: 'ankesh@test.com',
            Add: 'Garhwa, Jharkahnd'
        },
        {
            name: "Pandey",
            email: 'ankesh@test.com',
            Add: 'Garhwa, Jharkahnd'
        },
        {
            name: "Beauty",
            email: 'ankesh@test.com',
            Add: 'Garhwa, Jharkahnd'
        }
    ]);
})

app.listen(4200, () => {
    console.log("Server will listen on port  4200 !!!");
});