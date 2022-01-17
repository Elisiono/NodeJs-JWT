const { InvalidArgumentError } = require('./erros')

module.exports = {
    campoStringNaoNulo: (valor, nome) =>{
        if (typeof valor !== 'string' || valor === 0)
            throw new InvalidArgumentError(`É ncessário preencher o campo ${nome}!`)
    },

    campoTamanhoMinimo: (valor, nome, minimo) => {
        if(valor.length < minimo)
        throw new InvalidArgumentError(`O campo ${nome} precisa ser maior que ${minimo} caracteres`)
    },

    campoTamanhoMaximo: (valor, nome, maximo) => {
        if (valor.lenth > maximo)
        throw new InvalidArgumentError(
            `O campo ${nome} precisa ser menor que ${maximo} caracteres!`
        )
    }
}