const path = require('path');

// console.log(path); // all path methods

// Filename
console.log(__filename);
console.log(__dirname);

// basename/dirname/extname
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));


// path Object
console.log(path.parse(__filename))

//path join
console.log(path.join(__dirname,"test","hello.html"))