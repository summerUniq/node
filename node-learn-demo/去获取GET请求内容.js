var http = require('http')
const util = require('util')
const url = require('url')
const Server = new http.Server()

Server.on('request', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(util.inspect(url.parse(req.url, true)))
})

Server.listen(3000)