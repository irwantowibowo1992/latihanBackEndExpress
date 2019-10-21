const jwt = require('jsonwebtoken')

const models = require('../models')
const User = models.user

exports.login = (req, res)=>{    
    //check if email and pass match in db tbl user
    const email = req.body.email
    const password = req.body.password //use encryption in real world case!

    User.findOne(
        
        {where: {email, password}}).then(user=>{
        if(user){
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            res.send({
                username : user.name,
                id : user.id,
                token
            }) 
        }else{
            res.send({
                error: true,
                message: "Wrong Email or Password!"
            })
        }
    })
}

exports.register = (req, res) => {
    const{email,password,name, image} = req.body

    User.create(req.body).then(()=>{
        User.findOne({
            where: {
                name, password
            }
        }).then(user => {
            const token = jwt.sign({ userId: user.id }, 'my-secret-key')
            res.send({
                username : user.name,
                id : user.id,
                token
            }) 
        })
    })
}