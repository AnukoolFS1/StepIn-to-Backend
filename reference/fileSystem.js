const fs = require('fs')
const path = require('path')
// console.log(fs)


// Folder Creation
function mkFolderHandles(err) {
    if (err) console.log(err)
    else console.log('folder created');
}

// fs.mkdir(path.join(__dirname, '/test'), mkFolderHandles)


// File Creation
// fs.writeFile(path.join(__dirname, '/test', 'test.js'), 'console.log("new file here")', (err) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log('file created');
// })


// Read File
// fs.readFile(path.join(__dirname,'/test','test.js'), 'utf-8', (err, data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })


// Rename file
// fs.rename(path.join(__dirname, "/test", 'test.js'),
// path.join(__dirname, '/test', 'test1.js'),
// (err)=>{console.log('filerenamed');
// });

// make directory (folder)
// fs.mkdir(path.join(__dirname, "test2"), mkFolderHandles);

// fs.writeFile(path.join(__dirname, "test2", "node.js"), "console.log('hello node')",
//     (error) => {
//         if (error) {
//             console.log(error)
//         } else {
//             console.log('file has written')
//         }
//     }
// )

fs.appendFile(path.join(__dirname, "test", "test1.js"), "`The append work like this`\n", (err, data) => {
    console.log(err, "hel")
    console.log(data)
})

// fs.readFile(path.join(__dirname,"test2","node.js"), "utf-8", (err, data) => {
//     if(err){
//         console.log(err)
//     }else console.log(data)
// })

// fs.rename(path.join(__dirname, "test2", "node.js"),
// path.join(__dirname, "test2", "node1.js"),
// err => {
//     if(err) console.log(err)
//         else console.log('file renamed')
// }
// )