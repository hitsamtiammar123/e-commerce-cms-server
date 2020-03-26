'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    name: DataTypes.STRING,
    isScrapped:DataTypes.BOOLEAN
  }, {});
  Banner.associate = function(models) {
    // associations can be defined here
  };
  return Banner;
};