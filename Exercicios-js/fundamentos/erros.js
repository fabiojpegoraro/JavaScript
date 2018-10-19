function tratarErroELancar(e){
    throw new Error('Access Violation');
}

function imprimirNomeGritado(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!');
    } catch (e){
        tratarErroELancar(e)
    } finally{
        console.log('É tetra!');
    }
}
const obj = {nome: 'Fabio'};
imprimirNomeGritado(obj);