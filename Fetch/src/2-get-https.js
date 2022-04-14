'use strict';

const http = require('https');
const fs = require('fs');
const url = 'https://www.ietf.org';

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
        const data = lines.join();
        fs.writeFile('content.html', data, ()=>{
            console.log('saved');
        })
    })
})
