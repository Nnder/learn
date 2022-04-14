'use strict';
const http = require('http');
const https = require('https');

const url = 'https://www.ietf.org';

const fetch = url => new Promise((resolve, reject)=>{
    const protocol = url.startsWith('https') ? https : http;
    protocol.get(url, res=> {
        if(res.statusCode !== 200){
            const {statusCode, statusMessage} = res;
            reject(`Status code ${statusCode} ${statusMessage}`);
        }
        res.setEncoding('utf-8');
        const lines = [];
        res.on('data', (chunk)=>{
            lines.push(chunk);
        })
        res.on('end', ()=>{
            resolve(lines.join());
        })
    })
})


fetch(url).then(data=>console.log(data)).catch(e=>console.log(e));
