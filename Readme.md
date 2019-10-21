## ORM (Object Relational Mapping) Menggunkana Sequelize

Sequelize adalah ORM untuk NodeJS, yang dapat digunakan pada server Anda. ORM akan menyederhanakan Querying Basis Data, Migrasi, dan Mengelola Hubungan antar tabel.

## Cara Install
1. install Sequelize
```
    yarn add sequelize
```

2. Tool untuk melakukan migrasi
```
    yarn add sequelize-cli
```

3. Init Sequelize di project kita
```
    npx sequelize init
```
pada tahap ini maka akan dibuatkan folder models, migrations, seeders

4. Tambahkan package mysql
```
    yarn add mysql2
```

## Mari Kita Mulai
Buat database

Masuk folder config/config.json kemudian sesuaikan pengaturan sesuai dengan project kita. Misal seperti ini
```
    "development": {
        "username": "root",
        "password": null,
        "database": "backendwebtoon",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": false
    },
```

Buat model dan migration untuk tabel users dan todos (ini hanyalah contoh saja)
```
    npx sequelize-cli model:generate --name user --attributes email:string,password:string,name:string

    npx sequelize-cli model:generate --name todo --attributes title:string,is_done:boolean,created_by:integer
```

Atur migrasi untuk relasinya secara manual di file ./migration/*create-todos.js
```javascript
    created_by: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
    },
```

Kemudian jalankan migrasinya
```
    npx sequelize db:migrate
```

Buat seeder user dan todo
```
    npx sequelize-cli seed:generate --name demo-user

    npx sequelize-cli seed:generate --name demo-todo
```

Lalu jalankan seeder
```
    npx sequelize db:seed:all
```