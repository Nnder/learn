// readable
// writable
// duplex
// transform


const fs = require('fs');
const path = require('path');

// fs.readFile(path.resolve(__dirname, 'text.txt'),(err,data)=>{
//     if(err){
//         throw err;
//     }
//     console.log(data)
// })

// const stream = fs.createReadStream(path.resolve(__dirname, 'text.txt'), {encoding: 'utf-8'});

// stream.on('data', (chunk)=>{
//     console.log(chunk);
// })


// const writable = fs.createWriteStream(path.resolve(__dirname, 'text2.txt'));

// for(let i = 0; i<20; i++){
//     writable.write(i+ '\n');
// }

// writable.end();
// writable.close();
// writable.destroy();


const http = require('http');

http.createServer((req,res)=>{
    //req - readeable stream
    //res - writable stream

    const st = fs.createReadStream(path.resolve(__dirname, 'text.txt'), {encoding: 'utf-8'})

    // отправка по сети
    st.on('data', (chunk)=>{
        res.write(chunk);
    })

    // когда отправли завершаем сетевое подключение
    st.on('end', (chunk)=>{
        res.end()
    })

    //  синхронизация 2 стримов чтобы они закончились в один момент
    st.pipe(res)
})