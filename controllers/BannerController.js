const {Banner}=require('../models');
const path=require('path');

class BannerController{
    static async add(req,res){
        if(req.files && req.files.banner){
            try{
                let banner=req.files.banner;
                let count=await Banner.count();
                let ext=path.extname(banner.name);
                let filename='banner-'+count+ext;
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
            res.status(400).json({message:'No Image'});
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
}

module.exports=BannerController;