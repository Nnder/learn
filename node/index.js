const chalk = require('chalk');
const { text } = require('./data.js');

const http = require('http');
const fs = require('fs');
const path = require('path');



const server = http.createServer((req,res)=>{
    

    // if(req.url == '/contact.html'){
    //     const pathHTML = path.join(__dirname, 'contact.html');
        

    //     fs.readFile(pathHTML, (err, data)=>{
    //         if(err){
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-type': 'text/html',
    //         })
    //         res.end(data);
    //     })
    // } else {
    //     const pathHTML = path.join(__dirname, 'index.html');
    //     fs.readFile(pathHTML, (err, data)=>{
    //         if(err){
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             'Content-type': 'text/html',
    //         })
    //         res.end(data);
    //     })
    // }

    let filePath = path.join(__dirname, req.url === "/" ? 'index.html' : req.url)
    fs.readFile(filePath, (err, data)=>{
        if(err){
            throw err
        }
        res.writeHead(200, {
            'Content-type': 'text/html',
        })
        res.end(data);
    })

})

server.listen(3000, ()=>{
    console.log('server started');
});



//console.log(chalk.white(text));