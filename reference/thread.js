const crypto = require('node:crypto');

const start = Date.now();

const data = crypto.pbkdf2Sync("password", "salt", 10000000, 512, "sha512");

console.log(Date.now() - start,"ms")

