/////////// sum of two number///////////////
function add(a ,b) {
    var c = a+b;
    return c;
}
console.log(add(2,2));

/////////// subtraction of two number///////////////

function sub(a ,b) {
    var c = a-b;
    return c;
}
console.log(sub(5,2));


/////////// multiplication of two number///////////////

function mul(a ,b) {
    var c = a*b;
    return c;
}
console.log(mul(5,2));



/////////// Division of two number///////////////


function Div(a ,b) {
    var c = a/b;
    return c;
}
console.log(Div(5,2));

//////////////////////fibonacci series/////////////////////////

//////////////////////fibonacci series/////////////////////////

function fibonacci(num) {
    var n1=0;
    var n2=1;
    var n3;
    var i=0;
    for(i=0;i<num;i++) {
        n3=n1+n2;
        n1=n2;
        n2=n3;
    }
    return n2;
}
console.log(fibonacci(8));