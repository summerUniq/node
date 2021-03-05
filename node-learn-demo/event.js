const EventEmitter = require('events').EventEmitter
const event = new EventEmitter()
event.on('some_event', function () {
    console.log('sone_event occured');
})

setTimeout(()=> {
    event.emit('some_event')
}, 1000)