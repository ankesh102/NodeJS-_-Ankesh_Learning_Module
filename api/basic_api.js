
const http = require('http');

const data = require('./data');

http.createServer((req, res)=>{

    res.writeHead(200, {'Content-type':'application\json'}); // Header return 
    res.write(JSON.stringify(data));
    res.end();

}).listen(4500);