var fs = require('fs')
fs.readFile('./EventEmitter.js',  (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log('data', data);
    }
})