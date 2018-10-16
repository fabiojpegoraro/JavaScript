console.log(Math.ceil(6.1));

const obj1 = {};
obj1.nome = 'Fabio';
//obj1['nome'] = 'José';
console.log(obj1.nome);

function Obj(nome){
    this.nome = nome;
    this.exec = function(nome, texto) {
        console.log(nome, texto)
    };
}

const obj2 = new Obj('cadeira');
const obj3 = new Obj('mesa');

console.log(obj2.nome);
obj2.exec('obj2', 'teste1');
console.log(obj3.nome);
obj3.exec('obj3', 'teste2');