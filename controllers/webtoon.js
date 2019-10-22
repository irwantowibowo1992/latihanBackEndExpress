const Sequelize = require  ('sequelize')
const models = require('../models')
const Webtoon = models.webtoon
const User = models.user
const Search = Sequelize.Op

exports.index=(req,res) => {
    Webtoon.findAll({
        include:[{
            model: User,
            // as: "createdBy"
        }]
    }).then(webtoon => res.send(webtoon))
}