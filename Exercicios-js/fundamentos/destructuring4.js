function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min];
    const valor = Math.random() * (max - min) + min;
    return Math.ceil(valor);
}

console.log(rand([4, 10]));

console.log(rand([, 200]));

console.log(rand([998])); //definido o primeiro parâmetro

console.log(rand([])); //usa os valores padrão