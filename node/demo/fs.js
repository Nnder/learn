const fs = require('fs');
const {readFile} = require('fs');
const path = require('path');
fs.mkdir(path.join(__dirname, 'smth'), (err)=>{
    if(err){
        console.log('errrror');
    }
});

readFile(path.join(__dirname, 'path.js'), (err, data)=>{
    if(err){
        throw err;
    }

    console.log(data.toString())
}); 