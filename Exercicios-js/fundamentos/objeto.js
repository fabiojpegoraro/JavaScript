const prod1 = {};
prod1.nome = 'Celular Ultra MEga';
prod1.preco = 4998.90;
prod1['Desconto Legal'] = 0.40  //evitar

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj1:{
        numero: 1,
        obj2:{
            string: 'nome',
            numero: 2
        },
    }
}
let nome = 'Jose';

console.log(prod2);

'{"nome": "Jose", "idade": 10}'

console.log(`{"nome": "${nome}", "idade": 10}`);