## Group Routes

Group Routes diperlukan dalam pengembangan API untuk membedakan rute untuk API atau untuk tautan situs web standar. contohnya adalah seperti ini

https://dumbways.id/p/bootcamp vs https://dumbways.id/api/v1/bootcamp

Tentu saja Anda akan melihat perbedaannya. Tautan pertama adalah tautan standar untuk mengakses halaman di situs web, sedangkan tautan kedua adalah API yang menyediakan data JSON. Jadi awalan akan diperlukan untuk membedakan rute dalam aplikasi web.

Jika Anda tidak menggunakan rute grup, Anda harus menambahkan awalan di setiap rute seperti ini:

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

Hal sepertin ini memang bisa, tetapi kita harus mengetiknya secara manual satu per satu, dan tentu saja itu tidak terlalu efektif. Jadi cara yang benar adalah seperti ini:

Pertama kita install express-group-routes
```
    npm i --save express-group-routes
```

Kemudian kita akan ubah fileindex.js menjadi seperti ini
```javascript
    ...
    require('express-group-routes')

    ...

    //use group routes here
    app.group("/api/v1", (router) => {
        router.get('/todos', (req, res) => {
            res.send(todos)
        })
        
        router.get('/todo/:id', (req, res) => {
            const id = req.params.id
            const index = id - 1    
            res.send(todos[index])
        })
        
        ...
    })

    ...
```

dengan cara ini, semua rute Anda akan dikelompokkan dan diawali dengan /api/v1

maka kita bisa mengakses endpoint kita dengan cara akses 
```
    http://localhost:5000/api/v1/todos

    http://localhot:5000/api/v1/todo/1
```
