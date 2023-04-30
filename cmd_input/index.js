// console.log(process.argv); // for giving input in cmd line
 
// Now we can add file , add text inside file all from cmd.

const fs = require('fs');

const input = process.argv;

if(input[2] == 'add'){

    fs.writeFileSync(input[3], input[4]);
} else if(input[2] == 'remove') {
    fs.unlinkSync(input[3]);
}
else {
    console.log("Invalid Input!!");
}


