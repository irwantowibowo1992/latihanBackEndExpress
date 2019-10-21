//instantiate express modeule
const express = require ('express')

//init bodyParser
const bodyParser = require('body-parser')

//use express in app variable
const app = express()

//define the server port
const port = 5000

//allow this app to receive incoming json request
app.use(bodyParser.json())

//make hardcode array of obj todos
const todos = [
    {
        id: 1,
        title: 'Dinner with my wife',
        isDone: false
    },
    {
        id: 2,
        title: 'Playing Volleyball',
        isDone: true
    }
]

//GET list route: simply send arr of obj todos on your user screen
app.get('/todos', (req, res) => {
    res.send(todos)
})

//GET detail route: send the todo obj, by received id request params
app.get('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1    
    res.send(todos[index])
})

//POST route: receive json body request, from user input, then push to todos array
app.post('/todo', (req, res) => {
    const data = req.body
    todos.push(data)
    res.send(data)
})

//PATCH route: receive json body request, from user input, then push to todos array
//by object id
app.patch('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1 
    const data = req.body    
    todos[index] = {...todos[index], ...data}
    res.send(todos[index])
})

//DELETE route: delete the todo obj, by received id request params
app.delete('/todo/:id', (req, res) => {
    const id = req.params.id
    const index = id - 1        
    todos.splice(index, 1)
    res.send(todos)
})

app.listen(port, () => console.log(`Listening on port ${port}!`))