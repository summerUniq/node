var http = require('http')
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html'})
//     res.write('<h1>NODE</h1>')
//     res.end('<p>hello world</p>')
// }).listen(3000)

// console.log('Http server is listening at port 3000');


const Server = new http.Server()
Server.on('request', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1>NODE</h1>')
    res.end('<p>hello world</p>')
})
Server.listen(3000)
console.log('Http server is listening at port 3000');