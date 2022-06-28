import express from 'express';
import path from 'path';
import router from './routes/servers.js'
import {requestTime, logger} from './middlewares.js';

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT ?? 3000;

app.set('view engine', 'ejs');
app.set('views',path.resolve(__dirname, 'ejs'))
console.log(app.get('views'));

app.use(express.static(path.resolve(__dirname,'static')));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(requestTime);
app.use(router);

app.get('/', (req,res)=>{
    //res.send('hello');
    res.render('index',{title: 'main page', active:'main'});
})

app.get('/features', (req,res)=>{
    //res.send('hello');
    res.render('features',{title: 'features page',active:'features'});
})


// app.get('/', (req,res)=>{
//     //res.send('hello');
//     res.sendFile(path.resolve(__dirname,'static','index.html'), ()=>{
//         console.log('send file');
//     });
// })

// app.get('/download', (req,res)=>{
//     console.log(req.requestTime);
//     //res.send('hello');
//     res.download(path.resolve(__dirname,'static','index.html'), ()=>{
//         console.log('download file');
//     });
// })



app.listen(PORT, ()=>{
    console.log('server started on PORT ' + PORT);
});
