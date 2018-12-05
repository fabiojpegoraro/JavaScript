//coleção dinâmica de pares chave/valor
const produto = new Object

produto.nome = 'Cadeira'
produto['marca da cadeira'] = 'Genérica'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca da cadeira']

console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Fabio',
        idade: 31,
        endereco: {
            logradouro: 'Rua do Marfim',
            numero: 203
        },
        condutores:[{
            nome: 'Ana',
            idade: 21
        },{
            nome: 'José',
            idade: 32
        }],
        calcularValorSeguro: function() {}
        //....implementacao do calculo do seguro
    }
}

console.log(carro)

carro.proprietario.endereco.numero = 1000

console.log(carro)