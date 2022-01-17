const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('db.sqlite')

const POST_SCHEMA =`CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    titulo VARCHAR(50) NOT NULL,
    conteudo VARCHAR(140)
    )`

const USUARIOS_SCHEMA =`CREATE TABLE IF NOT EXISTS usuario (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome VARCHAR(40) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
    )`

db.serialize(()=>{
    db.run('PRAGMA foreign_key=ON')
    db.run(POST_SCHEMA)
    db.run(USUARIOS_SCHEMA)
})

db.each('SELECT * FROM usuario', (err, usuario)=>{
    console.log('Usuarios: ')
    console.log(usuario)
})

process.on('SIGINT', ()=>
    db.close(()=>{
        process.exit(0)
    })
)

module.exports = db