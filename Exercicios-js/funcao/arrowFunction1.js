let dobro = function (a){
    return 2 * a
}

dobro1 = (a) => {
    return 2 * a
}

dobro2 = a => 2 * a

console.log(dobro(2))
console.log(dobro1(3))
console.log(dobro2(4))

let ola = function () {
    return 'Olá'
}

ola1 = () =>{
    return 'Olá1'
}

ola2 = _ => 'Olá2'

console.log(ola())
console.log(ola1())
console.log(ola2())