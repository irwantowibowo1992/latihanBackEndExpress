## Bekerja Dengan Database

Untuk meteri kali ini akan dibahas bagaimana memanipulasi database dengan express. Kita akan bekerja dengan MySQL. Pastikan sudah memiliki MySQL di komputer kita.

Langkah selanjutnya adalah membuat database dan tabel, misal saja nama tabelnya adalah todos dengan struktur sebagai berikut
```
    id PK ai
    title varchar
    isDone boolean/tinyint
```

Kemudian tambahkan package 'mysql' di express app kita
```
    npm i --save mysql
```

Tambahkan file db.js untuk mengkonksikan app kita dengan database
```javascript
    const mysql = require('mysql')
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'backendwebtoon'
    })

    connection.connect()

    module.exports = connection
```

Selanjutnya kita dapat memanggil query melalui controllers todo.js kita


```javascript
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
```

Untuk selanjutnya bisa kita test melalui postman atau aplikasi semacamnya