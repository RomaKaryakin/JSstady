"use strict";

function first(){
    setTimeout(function(){
        console.log(1);
    }, 500);
}

function second(){
    console.log(2);
}

first();
second();

function learnJS(name, callBack){
    console.log(`I am stasy: ${name}`);
    callBack();
}

learnJS('JavaScript', function(){
    console.log('I past this lesson');
});