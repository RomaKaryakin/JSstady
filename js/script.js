"use strict";

let numberOfFilms = +prompt('How match movies are you watvhed?', '');

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Waht the lest muvie are you wathced?', ''),
    b = prompt('What grade are you giv them?', ''),
    c = prompt('Waht the lest muvie are you wathced?', ''),
    d = prompt('What grade are you giv them?', '');
    
personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);
