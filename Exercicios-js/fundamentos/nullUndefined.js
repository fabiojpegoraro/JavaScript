let valor;

console.log(valor);

valor = null;

console.log(valor);
//console.log(valor.toString());

const produto = {};

console.log(produto.preco);
console.log(produto);

produto.preco = 3.5;

console.log(produto);

produto.preco = undefined //não usar
console.log(!!produto.preco);