'use strict';
// let numberOfFilms;


// function start() {
	
// 	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
// 		numberOfFilms = prompt('Сколько фильмов вы уже посмотрели за последнее время?','');
// 	}
// 	return numberOfFilms;
// };
// // DB 
// const personalMovieDB = {
// 	count:numberOfFilms,
// 	movies: {},
// 	actors: {},
// 	genres: [],
// 	private: false
// };

// function fillDB () {
// 	let lastMovie;
// 	let lastMovieRating;
// 	for (let index = 0; index < numberOfFilms; index++) {

	
// 		lastMovie = prompt('Название одного из последних фильмов?','');
// 		if (lastMovie == '' || lastMovie == null) {
// 			index--;
// 			continue;
// 		}
// 		lastMovieRating = +prompt('На сколько его оцените?','');
// 		if (isNaN(lastMovieRating)) {
// 			index--;
// 			alert('rating must be a number');
// 			continue;
// 		}
// 		personalMovieDB.movies[lastMovie] = lastMovieRating;
// 	};
// 	return personalMovieDB;
// }

// function showDB(hidden) {
// 	if (!hidden) {
// 		console.log(personalMovieDB);
// 	}
// }

// start();
// fillDB();
// showDB(personalMovieDB.private);

const student = {
	name: 'miran',
	surname: 'shamaev',
	languages: {
		python: 'intermediate',
		javascript: 'beginner',
		sql: 'intermediate'
	},
	learnNewLanguage: function(lang) {
		console.log(`I learned ${lang}`);
	},
	functions: {
		jump: function() {
			console.log('I jumped');
		},
		run: function() {
			console.log('I run');
		}
	}
};

console.log(student['languages']['python']);
student.learnNewLanguage('java');

// destructuring the object variables and functions
const {python, sql} = student.languages;
const {jump, run} = student.functions;

console.log(python, sql);
jump();
run();
