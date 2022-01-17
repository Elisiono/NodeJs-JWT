const post = require('./src/posts')
const usuarios =require('./src/usuarios')

module.exports = app => {
    app.get('/', (res,req)=> {res.send('Olá pessoal')})

    post.rotas(app)
    usuarios.rotas(app)
}