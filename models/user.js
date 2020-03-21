'use strict';
module.exports = (sequelize, DataTypes) => {

  const Model=sequelize.Sequelize.Model;
  const md5=require('md5');

  class User extends Model{
    get tokendata(){
      return {
        id:this.id,
        username:this.username,
        email:this.email,
        name:this.name
      }
    }
  }

  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM(['user','admin']),
    username: DataTypes.STRING,
    name: DataTypes.STRING
  }, {sequelize,modelName:'User'})

  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate((instance,options)=>{
    instance.password=md5(instance.password);
  })

  return User;
};