const fs = require('node:fs');

const readableStream = fs.createReadStream("./reference/file1.txt", {
    encoding:"utf-8",
    highWaterMark:3
})

readableStream.on("data", (chunk) => {
    console.log(chunk)
})