const path = require('path');
const { fileURLToPath } = require('url');

console.log(path.join('first','second','..'));
console.log(path.resolve('first','second'));

console.log(__dirname);
console.log(__filename)


let fullpath = path.parse(path.resolve('first','second.js'));
console.log(fullpath)
console.log(path.isAbsolute(path.resolve('first','second.js')))
console.log(path.sep)

console.log(path.basename(path.resolve('first','second.js')))
console.log(path.extname(path.resolve('first','second.js')))



// ---------------------------------------------------

const siteUrl = 'http://localhost:8080/users?id=5123'

const url = new URL(siteUrl);

console.log(url.host)
console.log(url.hostname)
console.log(url.port)
console.log(url.protocol)
console.log(url.search)
console.log(url.searchParams)
console.log(url)
