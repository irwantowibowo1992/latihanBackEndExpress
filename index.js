//instantiate express modeule
const express = require ('express')

//use express in app variable
const app = express()

//define the server port
const port = 5000

//buat home page route
app.get('/', (req, res) => {
    //mengirim respon ke API
    res.send('Hello Express')
})

//ketika node dieksekusi, tampilkan console log listen port
app.listen(port, () => console.log(`listening on port ${port}`))