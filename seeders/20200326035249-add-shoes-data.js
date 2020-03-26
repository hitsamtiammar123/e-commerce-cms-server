'use strict';
const fs=require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      let data=fs.readFileSync('./scrapData.json','utf-8')
      let dataObj=JSON.parse(data)
      for(let i=0;i<dataObj.length;i++){
        let d=dataObj[i]
        d.createdAt=new Date()
        d.updatedAt=new Date()
      }
      console.log(dataObj[0])
        return queryInterface.bulkInsert('Products', dataObj, {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Products', null, {});
  }
};
