const notas = [3.5, 6.8, 8.9, 8.8, 7.5];

for (let i in notas){
    console.log(`Nota ${i}: ${notas[i]}`);
}

const pessoa = {
    nome: 'Fabio',
    sobrenome: 'Pegoraro',
    idade: 31,
    peso: 74
}

for(let n in pessoa){
    console.log(`${n}: ${pessoa[n]}`)
}