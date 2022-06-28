import express from "express";
import router from "./Router/Router.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use('api/', router);


function start(){
    try {
        app.listen(PORT, ()=>{
            console.log(`Server started on port: ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();

