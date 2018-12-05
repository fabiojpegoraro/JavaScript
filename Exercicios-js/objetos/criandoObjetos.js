//usando a notacao literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funcoes contrutoras
function Produto(nome, preco, desc){
    this.nome = nome;
    this.CalcularPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 6.00, 0.15)
console.log(p1.CalcularPrecoComDesconto())
const p2 = new Produto('Notebook', 5.000, 0.10)
console.log(p2.CalcularPrecoComDesconto())

//Funcao Factory
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase /30) * (30 - faltas)
        }
    }
}

const funcionario1 = criarFuncionario('João', 3000, 2);
console.log(funcionario1.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Maria'
console.log(filha)

//Funcao que retorna objeto
const fromJson = JSON.parse('{"nome": "Fabio"}');
console.log(fromJson.nome)