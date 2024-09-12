//Operating System

const os = require('os');

// platform
console.log(os.platform()) // win32;

// architecture
console.log(os.arch()) // x64

// machine
console.log(os.machine())

// // version
console.log(os.version())

// cores
console.log(os.cpus()) //cpu model, speed, times {user, nice, sys, idle, irq}
console.log(os.cpus().length) // number of cores in your cpu

// memory
console.log(os.totalmem()) // shows the Ram in bytes
console.log(os.totalmem() / (1024**3)); //7.71.. in my scenario

console.log(os.freemem()) // show the amount of Ram which is not being used
console.log(os.freemem() / (1024**3)) //

let usedMem = (os.totalmem() - os.freemem()) / 1024**3;
console.log(usedMem);
