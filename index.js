console.log('starting backend');

//-----------url
const url = new URL('http://mywebsite.com/index.html?name=anukool&sname=chauhan&age=25')

console.log(url)
// href = 'http://mywebsite.com/index.html?name=anukool&sname=chauhan&age=25'
// origin = 'http://mywebsite.com'
// protocol = 'http'
// host = 'mywebsite.com'
// hostname = 'mywebsite.com'
// pathname = "/index.html"
// search = "?name=anukool&sname=chauhan&age=25"
// searchParams = URLSearchParams { 'name' => 'anukool', 'sname' => 'chauhan', 'age' => '25' }



//------------path
const path = require('path');

//filename
console.log(__filename)

//directory
console.log(__dirname)

//ext
console.log(path.extname(__filename))
//basename
console.log(path.basename(__filename))
//parse
console.log(path.parse(__filename))

// join
console.log(path.join(__dirname, "/test", "text.txt"))


const fs = require('fs');

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//     if (err) console.log('err')
//     else console.log('folder created')
// })

// let data = [1,2,3,4,5,6]

// fs.writeFile(path.join(__dirname, "test", "text.txt"), JSON.stringify(data), (err) => {
//     if (err) console.log('error occured')
//     else console.log('file has been created')
// })

fs.readFile(path.join(__dirname, "test", "text.txt"), "UTF-8", (err, data) => {
    if(err) console.log("error occured");
    else console.log(data)
})

// fs.rename(path.join(__dirname, "test", "text.txt"),
//     path.join(__dirname, "test", "test.txt"),
//     (err) => {
//         if (err) console.log('error occured')
//         else console.log('file renamed')
//     })

const os = require('os')

console.log(os.arch())
console.log(os.cpus().length) // cores
console.log(os.machine())
console.log(os.version()) //os name like windows

const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('Hello backend')
    res.end()
})

server.listen(3000, ()=> console.log('server has initiated'))