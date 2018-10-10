let numero = 1;
{
    let numero = 2;
    console.log('dentro=', numero);
}

function mostrarValor(valor){
    let numero = valor;
    return numero;
}

const imprimir = (a) => {
    let numero = a;
    return numero;
}

console.log('fora=', numero);

console.log('funcao1=', mostrarValor(3));

console.log('funcao2=', imprimir(4));