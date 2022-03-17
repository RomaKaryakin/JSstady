"use strict";

const arr = [39, 5, 4, 12, 8];

arr.sort(compereNum);

console.log(arr);

function compereNum(a, b){
    return a -b;
}

// console.log(arr.length);

// arr.pop();
// arr.push(10);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// console.log(arr);

// for(let value of arr){
//     console.log(value);
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i} :${item} In the array ${arr}`);
// });

// const str = prompt("", "");
// const product = str.split(", ");
// product.sort();
// console.log(product.join('; '));