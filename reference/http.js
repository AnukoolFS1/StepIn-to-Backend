// // hypertext transfer protocol

// const http = require('http')

// const serverListener = (req, res) => {
//     res.write('backend initial stage');
//     res.end()
// }

// const server = http.createServer(serverListener);

// server.listen(6557, ()=>console.log('server initiated'));
// // console.log('hi'); // to check if asynchronous capability of .listen Method


const http = require('http');

const serverListener = (req, res) => {
        res.writeHead(200,{"Content-Type": "text/html"});
        res.end('<h1> Hello client </h1>')
}

const server = http.createServer(serverListener);

server.listen(3000, ()=> console.log('server initited'))