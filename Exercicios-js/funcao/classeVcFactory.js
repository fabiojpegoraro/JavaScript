class Pessoa{
    constructor(nome){
        this.nome = nome
    }
    falar(){
        console.log(`Nome: ${this.nome}`)
    }
}

const p1 = new Pessoa('Fabio')
p1.falar()

const criarPessoa = nome => {
    return{
        falar: () => {return `Falar ${nome}`}
    }
}

const p2 = criarPessoa('Oi')
console.log(p2.falar())