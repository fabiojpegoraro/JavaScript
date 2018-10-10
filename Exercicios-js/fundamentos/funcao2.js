//Armazenando uma funcao dentro de uma variavel ou constante
const imprimirSoma = function (a, b){
    console.log(a+b);
};

imprimirSoma(2, 3);

//Armazenando uma funcao arrow dentro de uma variavel ou constante
const soma = (a,b) =>{
    return a+b;
};
console.log(soma(2, 4));

const subtracao = (a, b) => a - b;

console.log(subtracao(5, 4));

const imprimirDois = a => console.log(a);

imprimirDois('Teste');