const EventEmitter = require('node:events');
const emitter = new EventEmitter();

emitter.on("test", (a,b) => {
    console.log(`${a} has initiated at this point`);
})


emitter.on("test", (a,b) => {
    if(b === "random"){
        console.log(`Yes we can use the second :on over the same emit`)
    }
})

emitter.emit("test", "server", "random")
emitter.emit('test', "server2")