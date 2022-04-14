const crypto = require('crypto');
const { threadId, Worker } = require('worker_threads');

const start = Date.now();

crypto.pbkdf2('123ttt','5', 1000000,64,'sha512', (data)=>{
    console.log('1 ',Date.now()-start);
})

crypto.pbkdf2('123ttt','5', 1000000,64,'sha512', (data)=>{
    console.log('2 ',Date.now()-start);
})

crypto.pbkdf2('123ttt','5', 1000000,64,'sha512', (data)=>{
    console.log('3 ',Date.now()-start);
})

crypto.pbkdf2('123ttt','5', 1000000,64,'sha512', (data)=>{
    console.log('4 ',Date.now()-start);
})

crypto.pbkdf2('123ttt','5', 1000000,64,'sha512', (data)=>{
    console.log('5 ',Date.now()-start);
})



// Демультплексор событий

