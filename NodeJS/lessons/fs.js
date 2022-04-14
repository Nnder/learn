// const { rejects } = require('assert');
const fs = require('fs');
// const { resolve } = require('path');
const path = require('path');

// console.log('start');

// fs.mkdir(path.resolve(__dirname,'dir'), (err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     else{
//         console.log('dir created');
//     }
// })

// console.log('end');

// fs.rmdir(path.resolve(__dirname, 'dir'), (err)=>{
//     console.log(err)
// })


// fs.writeFile(path.resolve(__dirname,'test.txt'), '123123123123123',(err)=> console.log(err));

// fs.appendFile(path.resolve(__dirname,'test.txt'), '////1231231ddd',(err)=> console.log(err))

const writeFileAsync = async (path,text)=>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(path, text, (err)=>{
            if(err){
                return reject(err);
            }else{
                return resolve();
            }
        })
    })
}

const readFileAsync = async (path)=>{
    return new Promise((resolve,reject)=>{
        fs.readFile(path, {encoding:'utf-8'}, (err,data)=>{
            if(err){
                return reject(err);
            }else{
                return resolve(data);
            }
        })
    })
}

const rmFileAsync = async (path)=>{
    return new Promise((resolve,reject)=>{
        fs.rm(path, (err)=>{
            if(err){
                return reject(err);
            }else{
                return resolve();
            }
        })
    })
}

const filePath = path.resolve(__dirname, 'text.txt');
const text = process.env.TEXT || '';

writeFileAsync(filePath, text)
    .then(()=>readFileAsync(filePath))
    //.then((data)=>data.split(' ').length)
    .then((data)=>writeFileAsync(path.resolve(__dirname, 'count.txt'), data))
    .then(()=>rmFileAsync(filePath))

