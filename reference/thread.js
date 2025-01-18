const crypto = require('node:crypto');

const start = Date.now();

// const data = crypto.pbkdf2Sync("password", "salt", 10000000, 512, "sha512");

for (let i = 0; i <= 3; i++) {
    crypto.pbkdf2('password', 'salt', 100000, 512, "sha512", () => {
        console.log(`hash ${i + 1} ${Date.now() - start}`)
    })
}

console.log(Date.now() - start, "ms")

