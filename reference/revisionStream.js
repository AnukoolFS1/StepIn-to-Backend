const fs = require('node:fs');

const readableStream = fs.createReadStream('./file1.txt', {
    encoding:"utf-8"
})

const writeAbleStream = fs.createWriteStream('./file2.txt')


readableStream.on('data', (chunk) => {
    writeAbleStream.write(chunk)
})