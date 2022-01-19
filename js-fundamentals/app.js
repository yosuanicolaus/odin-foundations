// odin fundamentals 3 practice

function add7(num){
    return (num + 7);
}

function multiply(a, b){
    return a*b;
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function lastLetter(str){
    return str.charAt(str.length - 1);
}

console.log(lastLetter('abcd'));