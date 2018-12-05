const a = 1;
const b = 2;
const c = 3;

const obj1 = {a:a, b:b, c:c}
const obj2 = {a, b, c}

console.log(obj1)
console.log(obj2)

const NomeAtributo = 'Nota';
const ValorAtributo = 7.0;

const obj3 = {}
obj3[NomeAtributo] = ValorAtributo;

console.log(obj3);

const obj4 = {[NomeAtributo]:ValorAtributo}

console.log(obj4);

const obj5 = {
    funcao1: function(){
        //implementação da função
    },
    funcao2(){
        //implementação da função
    }
}

console.log(obj5)