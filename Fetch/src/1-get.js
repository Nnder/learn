'use strict';

const http = require('http');

const url = 'http://ietf.org';

http.get(url, res=> {
    console.log(res.req._header);
    console.log(res.headers);

    if(res.statusCode !== 200){
        const {statusCode, statusMessage} = res;
        console.log(`Status code ${statusCode} ${statusMessage}`);
        return;
    }
    res.setEncoding('utf-8');
    const lines = [];
    res.on('data', (chunk)=>{
        lines.push(chunk);
    })
    res.on('end', ()=>{
        console.log(lines.join());
    })
})
