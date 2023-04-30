// Create file

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/ankes.txt`;

// To Create file 
// inside specific folder by assigning exact path to it.
// fs.writeFileSync(filePath, "This is CRUD operation Demo.")


// To read file 
//  Without including utf8 as 2 parameter it will give output 
// in Buffer format which is strange
// utf8 will covert them into proper string
/*
fs.readFile(filePath, 'utf8' ,(err, files)=> {
    console.log(files);
}) 
*/

// To Update file 
// fs.appendFile(filePath, " Now time to update somthing in file" , (err) => {
//     if(!err) console.log("File Updated successfully !!");
// })


// To Rename file 
// fs.rename(filePath, `${dirPath}/shishu.txt`,(err)=>{
//     console.log("file name is updated !!");
// })


// Now time to delete our file 

// fs.unlinkSync( `${dirPath}/shishu.txt`);
