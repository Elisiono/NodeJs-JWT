const usuariosControlador = require('./usuarios-controlador');

module.exports = {
    rotas: require('./usuarios-rotas'),
    controlador: require('./usuarios-controlador'),
    modelo: require('./usuarios-modelo')
}