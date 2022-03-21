"use strict";

// const arr = [39, 5, 4, 12, 8];

// arr.sort(compereNum);

// console.log(arr);

// function compereNum(a, b){
//     return a -b;
// }

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

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

const obj = {
    a: 5,
    b: 10
};

// const copy = obj;

// copy.a = 10;

// console.log(obj);
// console.log(copy);

function copy(mainOject){
    let copyObject = {};

    for(let key in mainOject){
        copyObject[key] = mainOject[key];
    }

    return copyObject;
}

const newObject = {
    a: 5,
    b: 1,
    c: {
        x: 0,
        z: 10

    }
};

const copyNewObject = copy(newObject);

copyNewObject.a = 21;

console.log(newObject);
console.log(copyNewObject);

const add = {
    d: 7,
    j: 25
};

// console.log(Object.assign(newObject, add));

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[0] = 't';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejurnal', 'bloger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

      console.log(internet);


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const mun = [2, 6, 7];

console.log(log(...mun));