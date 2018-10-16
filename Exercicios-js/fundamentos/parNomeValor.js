// par nome/valor

const saudacao = 'Opa'; //contexto léxico 1

function exec (){
    const saudacao = 'Faaala'; //contexto léxico 2
    return saudacao;
}

const cliente = {
    nome: 'Fabio',
    idade: 31,
    peso: 76,
    endereco: {
        logradouro: 'Rua do Marfim',
        numero: 203
    }
}
console.log(saudacao);
console.log(exec());

console.log(cliente.nome);
console.log(cliente.endereco);
console.log(cliente);