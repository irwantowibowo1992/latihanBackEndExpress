const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

//controllers
const AuthController = require('./controllers/auth')
// const TodosController = require('./controllers/todo')

//middlewares
const { authenticated } = require('./middleware')

//Webtoon
const WebtoonController = require('./controllers/webtoon')

//DetailWebtoon
const DetailWebtoonController = require('./controllers/detailwebtoon')

app.group("/api/v1", (router) => {
        //auth API
        router.post('/login', AuthController.login)
        router.post('/register', AuthController.register)

        //todos API
        // router.get('/todos', TodosController.index)
        // router.get('/todo/:id', TodosController.show)    
        // router.post('/todo', authenticated, TodosController.store)    
        // router.patch('/todo/:id', authenticated, TodosController.update)    
        // router.delete('/todo/:id', authenticated, TodosController.delete)

        //Webtoons
        router.get('/webtoons', WebtoonController.index)
        router.get('/webtoon/:id', WebtoonController.show)

        //Detail Webtoon
        router.get('/webtoon/:id/detailwebtoons', DetailWebtoonController.index)
    }
)



app.listen(port, () => console.log(`Listening on port ${port}!`))