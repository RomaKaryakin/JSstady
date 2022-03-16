"use strict";
 
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('How match movies are you watvhed?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('How match movies are you watvhed?', '');
    }
}

start();

let personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberUderAnswers(){
    for(let i = 0; i < 2; i++){
        let a = prompt('Waht the lest muvie are you wathced?', ''),
            b = prompt('What grade are you giv them?', '');
       
         if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
             personalMoviesDB.movies[a] = b;
             console.log('Corect');
         }else{
             console.log('Error');
             i--;
         }
     } 
}

// rememberUderAnswers();

function datectPersonalLevel(){
    if (personalMoviesDB.count < 10){
        alert("Very small");
    }else if(personalMoviesDB.count > 10 && personalMoviesDB.count < 30){
        alert("You are simple user");
    }else if(personalMoviesDB.count >= 30){
        alert("You are awesome");
    }else{
        alert("Error");
    }
    
      
}

// datectPersonalLevel();

// console.log(personalMoviesDB);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
       personalMoviesDB.genres[i - 1] = prompt(`What number of your favorite genre? ${i}`, '');
    }
}

writeYourGenres();

function showMyDB(hiden){
    if(!hiden){
        console.log(personalMoviesDB);
    }
}

showMyDB(personalMoviesDB.privat);