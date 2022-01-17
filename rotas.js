const post = require('')
const usuarios =require('')

module.exports = app => {
    app.get('/', (res,req)=> {res.send('Olá pessoal')})

    post.rotas(app)
    usuarios.rotas(app)
}