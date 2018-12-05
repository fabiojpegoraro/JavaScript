//Criar funcao de forma litera
function fun1() {}

//armazenar funcao em variavel
const fun2 = function () {}

//armazenar funcao dentro de array

const array = [function fun3(a, b){return a + b}, fun2, fun1]

console.log(array[0](2, 3));

//armazenar funcao dentro de atributo de obj

const obj = {};

obj.falar = function falar(texto){return texto};

console.log(obj.falar('teste de parametro'));

//passar funcao como parametro

function run(fun){
    fun()
}

run(function () { console.log('Executando função...') })

//uma funcao pode conter/retornar outra funcao
function soma(a, b) {
    return function(c) {
        console.log(a + b + c)
    }
}

soma(2, 3)(4);

const somaTudo = soma(2, 3)

somaTudo(7);