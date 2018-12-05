const soma = function (x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    return operacao(a, b)
}

console.log(imprimirResultado(3, 4))

console.log(imprimirResultado(3, 4, function(x, y){
    return x - y
}))

console.log(imprimirResultado(3, 4, (x, y) => {
    return x * y
}))

const pessoa = {
    falar: function(texto){
        console.log(texto)
    }
}

pessoa.falar('Buenos')