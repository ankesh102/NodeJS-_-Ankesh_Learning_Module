const fs = require('fs');
// here directly in root folder on txt file will be created.
// fs.writeFileSync("ap.txt","This is Demo file.");

// To create inside particular folder mentioned its path.

const path = require('path');

// to move inside that path where we need to create file
const dirPath = path.join(__dirname,"file"); 
console.log(dirPath); 

// if we want to create multiple file then we have to use loop
 // From this we can create file inside folder
for(var i = 0; i < 5; i++) 
{
    // It will create multiple folder in root directory only
    // fs.writeFileSync(`ankesh${i}.txt`,"This is sample of mulyiple file");

    // SO mentioned the accurate path.
    // Just include dirPath then `/` before file name
    fs.writeFileSync(dirPath+"/ankesh"+i+".txt","This is sample of mulyiple file");
    
}


// Now to time to read  file from folder  directory
 fs.readdir(dirPath,(err, files) => {
    // console.log(files); // To get file name in array format

    // to get file in individually
    // use foreach
    files.forEach(element => {
        console.log(element);        
    });


 })