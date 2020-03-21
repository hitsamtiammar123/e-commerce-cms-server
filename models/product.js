'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model=sequelize.Sequelize.Model;
  const path=require('path');

  class Product extends Model{
    static uploadFromReqIfExists(files,product){

      if(files && files.image ){
        let image=files.image;
        product.uploadImage(image);
      }

    }

    uploadImage(image){
      let env=process.env.NODE_ENV || 'development'
      //if(env==='development'){
        let id=this.id;
        let ext=path.extname(image.name);
        let imageName=id+ext;
        image.mv('./public/img/'+imageName);
        this.set('image_url',imageName);
        this.save();
      //}
    }
  }

  Product.init({
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    category:DataTypes.STRING
  }, {sequelize,modelName:'Product'})


  Product.associate = function(models) {
    // associations can be defined here
  };
  return Product;
};