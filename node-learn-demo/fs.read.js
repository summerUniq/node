var fs = require('fs')

fs.open('./fs.js', 'r', (err, fd) => {
    if(err){
        console.log(err);
        return
    }
    var buf = new Buffer.alloc(8)
    fs.read(fd, buf, 0, 8, null, (err, bytesRead, buffer)=> {
        if(err){
            console.log("22222err", err);
            return
        }
        console.log('bytesRead', bytesRead);
        console.log('buffer', buffer);
    })
})