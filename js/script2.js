"use strict";

function showFirstMessage(text){
    console.log(text);
    let num = 20;
}

showFirstMessage('Hello World!');

console.log(showFirstMessage.num);

function calc(a, b){
    return(a + b);
}

console.log(calc(4, 3));
console.log(calc(2, 2));
console.log(calc(7, 3));

function ret(){
    let num = 50;
    return(num);
}

const anotherNum = ret();

console.log(anotherNum);

const logger = function(){
    console.log('Hello');
};

logger();

const plus = (a, b) => (a + b);

console.log(plus(4, 5));