// class Pessoa{
//     constructor(nome){
//         this.nome = nome
//     }
//     falar(){
//         console.log(`Nome: ${this.nome}`)
//     }
// }

// const p1 = new Pessoa('Fabio')
// p1.falar()

function Pessoa(nome) {
    this.nome = nome;
    this.escrever = function() {
        return `O nome é ${this.nome}`
    }
}

const p1 = new Pessoa('Fábio')
console.log(p1.escrever())

const p2 = new Pessoa('Marília')
console.log(p2.escrever())

function Calculadora(a, b, oper){
    this.a = a
    this.b = b
    this.oper = oper
    
    if(this.oper == '+'){
        this.calcular = function(){
            return a + b
        }
    }else if(this.oper == '-'){
        this.calcular = function(){
            return a - b
        }
    }else if(this.oper == '*'){
        this.calcular = function(){
            return a * b
        }
    }else if(this.oper == '/'){
        this.calcular = function(){
            return a / b
        }
    }
}

// const s1 = new Calculadora(1, 2, '+')
// console.log(s1.calcular())


function Calculadora2(a, b, oper){
    //sem o this, não dá pra acessar as variáveis de fora da função construtora
    this.a = a
    this.b = b
    this.oper = oper

    this.calcular = function (){
        if (this.oper == '+'){
            return this.a + this.b
        }else if (this.oper == '-'){
            return this.a - this.b
        }else if (this.oper == '*'){
            return this.a * this.b
        }else if (this.oper == '/'){
            return this.a / this.b
        }else{
            return 'Operador inválido'
        }
    }
}

const c1 = new Calculadora2(2, 2, '+')
console.log(c1.calcular())