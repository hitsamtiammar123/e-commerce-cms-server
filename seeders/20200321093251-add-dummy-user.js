'use strict';
const md5=require('md5');

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
        return queryInterface.bulkInsert('Users', [{
          name: 'Haha Hehe',
          username:'hahahehe',
          role:'admin',
          email:'hehe@gmail.com',
          password:md5('hehehe'),
          createdAt:new Date(),
          updatedAt:new Date(),
        }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
     return queryInterface.bulkDelete('Users', null, {});
  }
};
