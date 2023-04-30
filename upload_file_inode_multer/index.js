// Create API to upload file in Node JS 

const express = require('express');
const multer = require('multer');

const app = express();

// To upload file we have create a middleware 

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req, file, call_back) {
            call_back(null, "uploads"); // Here upload is folder name where we want to store file 
        }, 
        filename: function(req, file, call_back){
            call_back(null, file.fieldname + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file"); // from where we are uploading like in which parameter 

app.post("/upload",upload,  (req, res) => {

    res.send("Upload done");
});

app.listen(5000);
