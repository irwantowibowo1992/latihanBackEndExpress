const connection = require('../db')

exports.index = (req, res) => {
    connection.query('SELECT * FROM todos', (err, rows) => {
        if(err) throw err

        res.send(rows)
    })
}

exports.show = (req, res) => {
    connection.query(`SELECT * FROM todos WHERE id=${req.params.id}`, (err, rows) => {
        if(err) throw err

        res.send(rows[0])
    })
}

exports.store = (req, res) => {
    const {title, isDone} = req.body

    connection.query(`INSERT INTO todos (title, isDone) VALUES('${title}','${isDone}')`, (err) => {
        if(err) throw err
    })

    res.send({
        success: true,
        data: req.body.title
    })
}

exports.update = (req, res) => {
    const id = req.params.id
    const {title, isDone} = req.body
    
    connection.query(`UPDATE INTO todos SET title=${title}, isDone=${isDone} WHERE id=${id}`, (err) => {
        if(err) throw err
    })

    res.send({
        success: true,
        data: req.body
    })
}

exports.delete = (req, res) => {
    
    connection.query(`DELETE FROM todos WHERE id=${req.params.id}`, (err) => {
        if(err) throw err
    })

    res.send({
        success: true
    })
}