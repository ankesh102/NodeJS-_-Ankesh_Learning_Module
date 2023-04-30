// In this module we are going to know how we can know our system architecturte and os config with OS module.

const os = require('os');

// console.log(os.arch());
// console.log(os.freemem()/(1024*1024*1024));
// console.log(os.totalmem()/(1024*1024*1024));

// console.log(os.hostname());
// console.log(os.platform());

console.log(os.userInfo());