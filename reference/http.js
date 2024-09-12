// hypertext transfer protocol

const http = require('http')

const serverListener = (req, res) => {
    res.write('backend initial stage');
    res.end()
}

const server = http.createServer(serverListener);

server.listen(6557, ()=>console.log('server initiated'));
// console.log('hi'); // to check if asynchronous capability of .listen Method


