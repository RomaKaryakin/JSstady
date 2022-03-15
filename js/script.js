"use strict";
 
let numberOfFilms = +prompt('How match movies are you watvhed?', '');

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a, b;

for(let i = 0; i < 2; i++){
    a = prompt('Waht the lest muvie are you wathced?', '');
    b = prompt('What grade are you giv them?', '');
  
    if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
        personalMoviesDB.movies[a] = b;
        console.log('Corect');
    }else{
        console.log('Error');
        i--;
    }
}

if (personalMoviesDB.count < 10){
    alert("Very small");
}else if(personalMoviesDB.count > 10 && personalMoviesDB.count < 30){
    alert("You are simple user");
}else if(personalMoviesDB.count >= 30){
    alert("You are awesome");
}else{
    alert("Error");
}

console.log(personalMoviesDB);
