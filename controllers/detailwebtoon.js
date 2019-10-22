const models = require('../models')
const DetailWebtoon = models.detailwebtoon
const Webtoon = models.webtoon
const User = models.user

exports.index=(req,res) => {
    DetailWebtoon.findAll({
        include:[{
            model: Webtoon,
            // as: "createdBy"
        }]
    }).then(detailwebtoon => res.send(detailwebtoon))
}