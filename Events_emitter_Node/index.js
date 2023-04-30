// Events Emitter : How much api call that count we want to send in our database 

const express = require("express");

const EventEmitter = require("events");

const app = express();

// Create events which count click of an api 
const event = new EventEmitter(); // creating object 

let count = 0;
// Capturing event 
event.on("countAPI", () => {
    count++;
    console.log("event called", count);
})

app.get("/" , (req, res) => {

    res.send("api events called !!");
    event.emit("countAPI"); // generating Event 
});

app.get("/update" , (req, res) => {

    res.send("update api events");
    event.emit("countAPI"); // generating Event 
});

app.get("/search" , (req, res) => {

    res.send("search api events");
    event.emit("countAPI"); // generating Event 
});

app.listen(5000);