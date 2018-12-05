const fabricantes = ['Volks', 'Ford', 'BMW', 'GM']

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)