"use strict";

const option = {
    name: 'Test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Make Test');
    }
};

option.makeTest();

const {border, bg} = option.colors;
// console.log(option.name);

// delete option.name;

// console.log(option);
let counter = 0;

for(let key in option){
    if(typeof(option[key]) === 'object'){
        for(let i in option[key]){
            console.log(`Option ${i} have value ${option[key][i]}`);
            counter++;
        }
    }else{
        console.log(`Option ${key} have value ${option[key]}`);
        counter++;
    }
}

console.log(counter);

console.log(Object.keys(option));
console.log(Object.keys(option).length);
