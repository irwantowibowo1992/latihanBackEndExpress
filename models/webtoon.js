'use strict';
module.exports = (sequelize, DataTypes) => {
  const webtoon = sequelize.define('webtoon', {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    createdBy: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {});
  webtoon.associate = function(models) {
    // associations can be defined here
    webtoon.belongsTo(models.user,{
      // as: 'createdBy',
      foreignKey: 'createdBy'
    })

    webtoon.hasMany(models.detailwebtoon,{
      foreignKey: 'webtoonId'
    })
  };
  return webtoon;
};