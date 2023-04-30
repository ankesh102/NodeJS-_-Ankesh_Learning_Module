// In this module remove extension while rendering HTML Pages.

const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');
// app.use(express.static(publicPath));

app.get('', (req, res)=>{

    res.sendFile(`${publicPath}/index.html`);
});
app.get('/about', (req, res)=>{

    res.sendFile(`${publicPath}/about.html`);
})

app.get('/home', (req, res)=>{

    res.sendFile(`${publicPath}/home.html`);
})

// If user input wrong URL then this page will open 404 error
app.get('*', (req, res)=>{

    res.sendFile(`${publicPath}/error.html`);
})


app.listen(5050);
