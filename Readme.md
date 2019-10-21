## hello Express

Pelajaran selanjutnya adalah membuat program Hello Express

Untuk membuatnya kita perlu menginstall Express terllebih dahulu
```javascript
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
```

kemudian jalankan express
```
    node index.js
```

Buka browser dan ketikkan 
```
    localhost:5000
```

5000 di sini adalah port yang kita definisikan di index.js di atas
