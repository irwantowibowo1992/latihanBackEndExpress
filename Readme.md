## Structuring

Ada begitu banyak pola untuk menyusun aplikasi express kita. Pada kesempatan kali ini kita akan belajar tentang structuring yang kita gunakan pada aplikasi kita secara sederhana dan mudah.

Buat folder controller dan buat file dengan nama todos.js

```javascript
   ...

        app.get('/api/v1/todos', (req, res) => {
            res.send(todos)
        })
            
        router.get('/api/v1/todo/:id', (req, res) => {
            const id = req.params.id
            const index = id - 1    
            res.send(todos[index])
        })

    ...
```

untuk membuat route API nya kita bisa menggunakannya di file index.js

```javascript
    //controllers
    const TodosController = require('./controllers/todo')

    app.group("/api/v1", (router) => {
            //todos API
            router.get('/todos', TodosController.index)
            router.get('/todo/:id', TodosController.show)    
            router.post('/todo', TodosController.store)    
            router.patch('/todo/:id', TodosController.update)    
            router.delete('/todo/:id', TodosController.delete)
        }
    )
```

maka kita bisa mengakses endpoint kita dengan cara akses 
```
    http://localhost:5000/api/v1/todos

    http://localhot:5000/api/v1/todo/1
```
