const http = require('node:http');
const fs = require('fs');
const { log } = require('node:console');

const server = http.createServer((req, res) => {
    if (req.url === "/") {

        fs.readFile("pages/home.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html)
            res.end();

        })

    } else if (req.url === "/about") {
    
        fs.readFile("pages/about.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html)
            res.end();

        })

    } else {
        
        fs.readFile("pages/notfoundpage.html", (err, html) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(html)
            res.end();

        });

    }

})
server.listen(3500);
console.log('node server port at 3500');