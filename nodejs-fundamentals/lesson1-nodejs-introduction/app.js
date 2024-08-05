const http = require('node:http');

const server = http.createServer((request,response)=>{
    response.setHeader("Content-Type",'text/html')
    response.statusCode = 200;
    response.statusMessage = 'OK';    
    response.write("<h1>Hello Server</h1>");
    response.end();
})
server.listen(3500);
console.log('node server port at 3500');