'use strict';
module.exports = (sequelize, DataTypes) => {
  const Banner = sequelize.define('Banner', {
    name: DataTypes.STRING
  }, {});
  Banner.associate = function(models) {
    // associations can be defined here
  };
  return Banner;
};