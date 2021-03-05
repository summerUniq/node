var http = require('http');

http.createServer((req, res)=> {
    res.writeHead(200, {"Content-Type": "text/html"})
    res.write('<h1>Node.js111111111</h1>')
    res.end('<p>HELLO WORLD</p>')
}).listen(3000)

console.log('HTTP server is listening at port 3000');