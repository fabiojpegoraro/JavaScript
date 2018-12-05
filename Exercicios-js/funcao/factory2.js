function criarProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('NoteBook', 5.50))
console.log(criarProduto('iPad', 3.00, '5%'))

function darSobrenome(nome){
    return `${nome} Pegoraro`
}

console.log(darSobrenome('Fabio'))

const completarNome = function(nome) {
    return{
        escrever: function () {return `${nome} Pegoraro`}
    }
}

const n1 = completarNome('Juliana')
console.log(n1.escrever())