'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {});
  user.associate = function(models) {
    // associations can be defined here
    // user.hasMany(models.webtoon,{
    //   as: 'createdby',
    //   foreignKey: 'userId'
    // })
  };
  return user;
};