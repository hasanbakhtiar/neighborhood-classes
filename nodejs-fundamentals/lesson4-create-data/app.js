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

    }else if (req.url === "/create" && req.method === "POST") {
        
        
        const data = [];

        req.on("data",(chunk)=>{
            data.push(chunk);
            // console.log(chunk);
        })
        req.on('end',()=>{
            const result = Buffer.concat(data).toString();
            const parseData = result.split("=")[1];

            fs.appendFile('./data/mydata.txt',parseData,(err)=>{
                    if (err) {
                        console.log(err);
                    }else{
                        res.statusCode = 302;
                        res.setHeader("Location",'/');
                        res.end();
                    }
            })
        })
        

    }else if (req.url === "/create") {
    
        fs.readFile("pages/form.html", (err, html) => {
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