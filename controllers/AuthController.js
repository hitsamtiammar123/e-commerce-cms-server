const {User}=require('../models');
const md5=require('md5');
const {makeToken}=require('../helpers/token');

class AuthController{
    static async register(req,res){
        let body=req.body;

        try{
            let user=await User.create(body);
            res.status(201).json(user);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async login(req,res){
        let body=req.body;
        
        try{
            let user=await User.findOne({where:{email:body.email,password:md5(body.password)}});
            if(user){
                //res.status(200).json(user);
                let token=makeToken(user);
                res.status(200).json({token});
            }
            else{
                res.status(400).json({message:'User not found'});
            }
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports=AuthController;