const {Product}=require('../models');
const fs=require('fs');

class ProductController{
    static async create(req,res){
        let {name,price,stock}=req.body;

        try{
            let product=await Product.create({name,price,stock});
            Product.uploadFromReqIfExists(req.files,product);
            res.status(201).json({status:'Product has created',product});

        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async index(req,res){
        try{
            let products=await Product.findAll({
                order:['id']
            });
            res.status(200).json(products);
        }catch(err){
            console.log(err);
            res.statue(500).json(err);
        }
    }

    static async update(req,res){
        let id=req.params.id;
        let body=req.body;

        try{
            let product=await Product.findByPk(id);
            Product.uploadFromReqIfExists(req.files,product);
            let result=await product.update(body);
            res.status(200).json({status:'updated',result})
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }

    static async delete(req,res){
        let id=req.params.id;

        try{
            let product=await Product.findByPk(id);
            let imgName='../client/public/img/'+product.image_url;
            if(fs.existsSync(imgName))
                fs.unlinkSync(imgName);
            
            let result=await product.destroy();
            res.status(200).json({status:'deleted',result});
        }catch(err){
            console.log(err);
            res.status(500).json(err);
        }
    }
}

module.exports=ProductController;
