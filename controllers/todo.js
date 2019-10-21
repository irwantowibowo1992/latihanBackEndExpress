const models = require('../models')
const Todo = models.todo
const User = models.user

exports.index = (req, res) => {
    Todo.findAll({
        include: [{
            model: User,
            as: "createdBy"
        }]
    }).then(todos=>res.send(todos))
}

exports.show = (req, res) => {
    Todo.findOne({id: req.params.id}).then(todos=>res.send(todos))
}

exports.store = (req, res) => {
    const { title, is_done, created_by } = req.body

    Todo.create(req.body).then(todo=>{
        res.send({
            message: "Sukses insert Data",
            todo
        })
    })
}

exports.update = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
    // const { title, is_done, id } = req.body

    Todo.update(
        req.body,
        {where: {id:req.params.id}}
    ).then(todo=>{
        res.send({
            message: "Sukses Update Data",
            todo
        })
    })
}

exports.delete = (req, res) => {
    //DO IT YOURSELF - MINI QUIZ
    //const { id } = req.body

    Todo.destroy(
        {where:{id:req.params.id}}
    ).then(todo=>{
        res.send({
            message: "Berhasil Hapus Data",
            todo
        })
    })
}