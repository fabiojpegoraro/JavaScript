const pessoa = {
    nome: 'Marilia',
    idade: 27,
    endereco: {
        logradouro: 'Rua Almiscar',
        numero: 1000
    }
}

const {nome, idade} = pessoa;

console.log(nome);
console.log(idade);

const{nome : n, idade : i} = pessoa;

console.log(n, i);

const {sobrenome = 'Maragno', bemHumorada = true} = pessoa;

console.log(sobrenome, bemHumorada);

const {endereco:{logradouro, numero, cep = null}} = pessoa;

console.log(logradouro, ', ', numero, ', ', cep);