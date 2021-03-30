var http = require('http')
const quireString = require('querystring')
const util = require('util')

http.createServer(function (req, res) {
    const post = ''
    res.on('data', (chunk)=> {
        post += chunk
    })
    res.on('end', () => {
        post = quireString.parse(post)
        res.end(util.inspect(post))
    })
}).listen(3000)