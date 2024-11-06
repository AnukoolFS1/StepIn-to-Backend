// const buffer = new Buffer.from("Anukool");

// console.log(buffer) // return the buffer in Hexadecimal

// buffer.write('Applepool') 

// console.log(buffer.toJSON()) // return in object of type:"Buffer", data: []

// console.log(buffer.toString())


const buffer = new Buffer.alloc(10)
buffer.write("Anukool")

console.log(buffer)
