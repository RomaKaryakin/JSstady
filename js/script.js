"use strict";
 
// let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('How match movies are you watvhed?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt('How match movies are you watvhed?', '');
//     }
// }



let personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    strat: function(){
        personalMoviesDB.count = +prompt('How match movies are you watvhed?', '');

        while(personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)){
            personalMoviesDB.count = +prompt('How match movies are you watvhed?', '');
    }
    },
    rememberUserAnswers: function(){
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
    },
    detectPersonalLevel: function(){
        if (personalMoviesDB.count < 10){
            alert("Very small");
        }else if(personalMoviesDB.count > 10 && personalMoviesDB.count < 30){
            alert("You are simple user");
        }else if(personalMoviesDB.count >= 30){
            alert("You are awesome");
        }else{
            alert("Error");
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i < 2; i++){
            // let a = prompt(`What number of your favorite genre? ${i}`, '');
            // if(a != null && a != ''){
            //     personalMoviesDB.genres[i - 1] = a;
            // }else{
            //     personalMoviesDB.genres[i - 1] = prompt(`What number of your favorite genre? ${i}`, '');
            //     i--;
            // }
            let a = prompt('Write your favorite ganers uder quts').toLowerCase();
            if(a != null && a != ''){
                personalMoviesDB.genres = a.split(', ');
                personalMoviesDB.genres.sort();
            }else{
                personalMoviesDB.genres[i - 1] = prompt('Error');
                i--;
            }
         }

         personalMoviesDB.genres.forEach((item, i) => {
             console.log(`Favorite genre ${i + 1} is ${item}`);
         });
    },
    showMyDB: function(hiden){
        if(!hiden){
            console.log(personalMoviesDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMoviesDB.privat){
            personalMoviesDB.privat = false;
        }else{
            personalMoviesDB.privat = true;
        }
    }
};

// function rememberUderAnswers(){
//     for(let i = 0; i < 2; i++){
//         let a = prompt('Waht the lest muvie are you wathced?', ''),
//             b = prompt('What grade are you giv them?', '');
       
//          if(a != null && b != null && a != '' && b != '' && a.length < 50 && b.length < 50){
//              personalMoviesDB.movies[a] = b;
//              console.log('Corect');
//          }else{
//              console.log('Error');
//              i--;
//          }
//      } 
// }

// // rememberUderAnswers();

// function datectPersonalLevel(){
//     if (personalMoviesDB.count < 10){
//         alert("Very small");
//     }else if(personalMoviesDB.count > 10 && personalMoviesDB.count < 30){
//         alert("You are simple user");
//     }else if(personalMoviesDB.count >= 30){
//         alert("You are awesome");
//     }else{
//         alert("Error");
//     }
    
      
// }

// // datectPersonalLevel();

// // console.log(personalMoviesDB);

// function writeYourGenres(){
//     for(let i = 1; i <= 3; i++){
//        personalMoviesDB.genres[i - 1] = prompt(`What number of your favorite genre? ${i}`, '');
//     }
// }

// function showMyDB(hiden){
//     if(!hiden){
//         console.log(personalMoviesDB);
//     }
// }
