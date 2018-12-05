const pessoa = {nome: 'João'}
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'Maria'
console.log(pessoa.nome)