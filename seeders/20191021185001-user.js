'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
      
    return queryInterface.bulkInsert('users', [
      {
        email: 'irwanto@yahoo.com',
        password: 'irwanto',
        name: 'Irwanto',
        image: 'https://i1.sndcdn.com/artworks-000200952998-needdi-t500x500.jpg'
      },
      {
        email: 'wibowo@yahoo.com',
        password: 'wibowo',
        name: 'Wibowo',
        image: 'https://i.pinimg.com/originals/57/53/74/575374bf227f9845685a2950dd976f88.png'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.bulkDelete('People', null, {});
  }
};
