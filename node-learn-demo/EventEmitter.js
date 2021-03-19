var events = require('events')

var emitter = new events.EventEmitter()

// emitter.on('someEvent', (ag1, ag2)=> {
//     console.log('listerner1', ag1, ag2);
// })

emitter.on('someEvent', (ag1, ag2)=> {
    console.lo('listerner2', ag1, ag2);
})

// emitter.emit('someEvent', 'byvoid', 1991)
emitter.on('error', (e)=> {
    console.log(e);
})
emitter.emit('error')