const pessoa = {
    nome: 'Fábio',
    idade: 31,
    peso: 74
}
console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
});

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
});

Object.defineProperty(pessoa, 'dataNascimento', {enumerable: true, writable: false, value: '02/12/1986'})

pessoa.dataNascimento = '02/12/1987';

console.log(pessoa.dataNascimento);

const dest = {a : 1}
const o1 = {b : 2}
const o2 = {c : 3, a : 4}
Object.assign(dest, o1, o2);

console.log(dest);