'use strict';
let numberOfFilms;


function start() {
	
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели за последнее время?','');
	}
	return numberOfFilms;
};
// DB 
const personalMovieDB = {
	count:numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function fillDB () {
	let lastMovie;
	let lastMovieRating;
	for (let index = 0; index < numberOfFilms; index++) {

	
		lastMovie = prompt('Название одного из последних фильмов?','');
		if (lastMovie == '' || lastMovie == null) {
			index--;
			continue;
		}
		lastMovieRating = +prompt('На сколько его оцените?','');
		if (isNaN(lastMovieRating)) {
			index--;
			alert('rating must be a number');
			continue;
		}
		personalMovieDB.movies[lastMovie] = lastMovieRating;
	};
	return personalMovieDB;
}

function showDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}

start();
fillDB();
showDB(personalMovieDB.private);

