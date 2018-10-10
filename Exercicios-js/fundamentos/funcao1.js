//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3);
imprimirSoma(2);
imprimirSoma(2, 5, 7, 8);
imprimirSoma();

//Funcao com retorno
function Somar(a, b=0){
    return a+b;
}

console.log(Somar(2,3));
console.log(Somar(3));