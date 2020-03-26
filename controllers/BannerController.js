const {Banner}=require('../models');
const path=require('path');
const fs=require('fs');
const md5=require('md5');

class BannerController{
    static async add(req,res){
        if(req.files && req.files.banner){
            try{
                let banner=req.files.banner;
                let sum=md5(new Date().getTime()+'')+Math.floor(Math.random()*100)+'';
                let ext=path.extname(banner.name);
                let filename='banner-'+sum+ext;
                banner.mv('./public/banner/'+filename);
                let new_banner=await Banner.create({name:filename});
                res.status(201).json(new_banner);
            }
            catch(err){
                console.log(err);
                res.status(500).json(err);
            }
        }
        else{
            let name=req.body.name
            let new_banner=await Banner.create({name});
            res.status(201).json(new_banner);
        }
    }

    static async index(req,res){
        try{
            let banners=await Banner.findAll({order:['id']});
            res.status(200).json(banners);
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async delete(req,res){
       try{
            let name=req.params.name;
            let imgName='./public/banner/'+name;
            if(fs.existsSync(imgName))
                fs.unlinkSync(imgName);
            
            let result=await Banner.destroy({where:{name}});
            res.status(200).json({status:'deleted',result});

       }catch(err){
           console.log(err);
           res.status(500).json(err);
       }
    }
}

module.exports=BannerController;