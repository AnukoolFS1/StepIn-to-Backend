// hypertext transfer protocol

const http = require('http')

const serverListener = (req, res) => {
    res.write('backend initial stage');
    res.end()
}

const server = http.createServer(serverListener);

console.log(server.constructor);


// server.listen(6557, ()=>console.log('server initiated'));
// console.log('hi');

