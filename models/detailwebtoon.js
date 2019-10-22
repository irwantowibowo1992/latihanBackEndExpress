'use strict';
module.exports = (sequelize, DataTypes) => {
  const detailwebtoon = sequelize.define('detailwebtoon', {
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    webtoonId: DataTypes.INTEGER
  }, {});
  detailwebtoon.associate = function(models) {
    // associations can be defined here
    detailwebtoon.belongsTo(models.webtoon,{
      foreignKey: 'webtoonId'
    })
  };
  return detailwebtoon;
};