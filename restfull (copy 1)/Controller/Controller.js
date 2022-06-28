import mongoose from 'mongoose';

const MONGO_USERNAME = 'nnder';
const MONGO_PASSWORD = 'passwd';
const MONGO_HOSTNAME = '127.0.0.1';
const MONGO_PORT = '27017';
const MONGO_DB = 'app';

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
mongoose.connect(url, {useNewUrlParser: true});

const Schema = mongoose.Schema;

const User = new Schema({
    name: {type: String, required: true},
    phone: {type: Number, required: true}
})

mongoose.model('user', User)


class Controller{
    async createOne(){
        let user = new User(req.body)
        user.save((err)=>{
            if(err){
                res.status(500).send('Error');
            } else {
                res.status(201).json(user);
            }
        })
    }

    async createMany(){
        
    }

    async getAll(){

    }

    async getOne(){

    }

    async delete(){

    }

    async update(){

    }


}


export default new Controller();