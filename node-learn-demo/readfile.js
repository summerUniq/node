const fs = require('fs')
fs.readFile('./helloworld.js', 'Utf-8', (err, data)=> {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})

console.log('end');

const data = fs.readFileSync('./helloworld.js', 'utf-8')
console.log(data);
console.log('endd');