const http = require('http');
const PORT = process.env.PORT || 5000;
const server = http.createServer((req,res)=>{
    

    // res.writeHead(200,{
    //     'Content-type': 'text/html; charser=utf8',
    // })

    res.writeHead(200,{
        'Content-type': 'application/json',
    })

    if(req.url == '/users'){
        return res.end(JSON.stringify([
            {id:1,name:'john'}
        ]))
    }

    if(req.url == '/posts'){
        return res.end('POSTS')
    }

    res.write(req.url);

    res.end('<h1>Server is works!</h1>');
});

server.listen(PORT, ()=> console.log(`Server started on port ${PORT}`))