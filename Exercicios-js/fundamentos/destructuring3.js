function rand({min=0, max=1000}){
    //console.log(max, min);
    const randomico = Math.random();
    //console.log(randomico);
    const valor = randomico * (max - min) + min;
    return Math.floor(valor);
};

console.log(rand({max: 60, min: 40}));

console.log(rand({min: 30}));