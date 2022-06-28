import User from '../Schema/User.js';

class Controller{
    async createOne(req,res){
        try {
            const {name, phone} = req.body;
            let result = await User.create({name,phone})
            res.status(201).json(result);
        } catch (error) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async createMany(req,res){
        try {
            let users = req.body;
            for(let user of users){
                console.log(user);
                const {name, phone} = user;
                let result = await User.create({name,phone})
            }
            res.status(201).json(users);
        } catch (e) {
            res.status(500).json({Message:"Error", ...e});
        }
        
    }

    async getAll(req,res){
        try {
            let result = await User.find();
            res.json(result);
        } catch (error) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async getOne(req,res){
        try {
            let result = await User.findById(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async delete(req,res){
        try {
            let result = await User.findByIdAndDelete(req.params.id);
            res.json(result);
        } catch (error) {
            res.status(500).json({Message:"Error", ...e});
        }
    }

    async update(req,res){
        try {
            let result = await User.findByIdAndUpdate(req.params.id,req,body,{new:true});
            res.json(result);
        } catch (error) {
            res.status(500).json({Message:"Error", ...e});
        }
    }


}


export default new Controller();