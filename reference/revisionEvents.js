const EventEmitter = require('node:events');

const Emitter = new EventEmitter

Emitter.on("any", (p1, p2) => {
    console.log(p1)
})

Emitter.emit("any", "any-val")