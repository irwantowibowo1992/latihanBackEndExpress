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

   return queryInterface.bulkInsert('detailwebtoons', [
      {
        title: 'Episode 1',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1343795426l/15780355.jpg',
        webtoonId: 1,
      },
      {
        title: 'Episode 2',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1181109939l/1114374._SX318_.jpg',
        webtoonId: 1,
      },
      {
        title: 'Episode 3',
        image: 'http://togamas.com/css/images/items/potrait/Crayon_Sinchan_3_2483.jpg',
        webtoonId: 1,
      },
      {
        title: 'Episode 1',
        image: 'https://www.anime-planet.com/images/manga/covers/ninja-hattori-kun-22282.jpg',
        webtoonId: 2,
      },
      {
        title: 'Episode 2',
        image: 'https://comicvine1.cbsistatic.com/uploads/scale_small/13/136525/6101725-2.jpg',
        webtoonId: 2,
      },
      {
        title: 'Episode 3',
        image: 'https://comicvine1.cbsistatic.com/uploads/scale_small/13/136525/6101727-3.jpg',
        webtoonId: 2,
      },
      {
        title: 'Episode 1',
        image: 'https://upload.wikimedia.org/wikipedia/id/c/c8/Doraemon_volume_1_cover.jpg',
        webtoonId: 3,
      },
      {
        title: 'Episode 2',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465387201l/6131591._SY475_.jpg',
        webtoonId: 3,
      },
      {
        title: 'Episode 3',
        image: 'https://comicvine1.cbsistatic.com/uploads/scale_medium/6/67663/5199238-03.jpg',
        webtoonId: 3,
      },
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete('detailwebtoons', null, {});
  }
};
