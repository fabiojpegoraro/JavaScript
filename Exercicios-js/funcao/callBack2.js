const notas = [5, 9, 7.8, 9.5, 6.8, 5.7, 6.6, 7]

//sem usar callback

let notasBaixas = []
for (let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas)

//com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota >= 7
})
console.log(notasBaixas2)

//com callback e arrow

const notasBaixas3 = notas.filter((nota) => nota <= 7)

console.log(notasBaixas3)