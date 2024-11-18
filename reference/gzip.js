const fs = require("node:fs");
const zlib = require('node:zlib');

const gzip = zlib.createGzip()

const readableStream = fs.createReadStream("./file1.txt");

const writeAbleStream = fs.createWriteStream("./file2.txt.gz")

readableStream.pipe(gzip).pipe(fs.WriteStream("./file3.txt.gz"))