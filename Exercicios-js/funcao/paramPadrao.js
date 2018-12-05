function soma(a, b, c) {
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
};

console.log(soma());
console.log(soma(1, 2, 3));
console.log(soma(0, 0, 0));

function soma2(a, b, c){
    a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1;
    c = isNaN(c) ? 1 : c;

    return a + b + c;
}

console.log(soma2());
console.log(soma2(1, 2, 3));
console.log(soma2(0, 0, 0));

function soma3(a = 1, b = 1, c = 1){
    return a + b + c;
}

console.log(soma2());
console.log(soma2(1, 2, 3));
console.log(soma2(0, 0, 0));