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

//=======

// const student = {
// 	name: 'miran',
// 	surname: 'shamaev',
// 	languages: {
// 		python: 'intermediate',
// 		javascript: 'beginner',
// 		sql: 'intermediate'
// 	},
// 	learnNewLanguage: function(lang) {
// 		console.log(`I learned ${lang}`);
// 	},
// 	functions: {
// 		jump: function() {
// 			console.log('I jumped');
// 		},
// 		run: function() {
// 			console.log('I run');
// 		}
// 	}
// };

// console.log(student['languages']['python']);
// student.learnNewLanguage('java');

// // destructuring the object variables and functions
// const {python, sql} = student.languages;
// const {jump, run} = student.functions;

// console.log(python, sql);
// jump();
// run();

//=======

// const people = [
// 	{name: 'miran', age: 25, budget: 25000},
// 	{name: 'hannah', age: 15, budget: 10000},
// ];

// people.forEach((person, index, people) => {
// 	console.log(`${index}: ${person.name} has ${person.budget} US Dollars`);
// });

// const people_names_and_ages = people.map((person) => {
// 	// return `${person.name} (${person.age})`;
// 	return person.age>18;
// });
// console.log(people_names_and_ages);

// const adults = people.filter((person) => person.age>18);
// // 	if (person.age > 18) return true;
// // });
// console.log(adults);

// const budgetSum = people.reduce((total, person) => total += person.budget, 0);
// // 	return total += person.budget;
// // },0);
// console.log(`total budget is ${budgetSum}`);

// const HANNAH = people.find((person) => person.name === 'hannah');
// // const HANNAH = people.find((person) => {
// // 	if (person.name === 'hannah') return person;
// // });


// console.log(HANNAH);
// // console.log(`${HANNAH.name} was found in our list`);

let oldOBJ = {
	a: 10,
	b: 20,
	c: {
		c1: 30,
		c2: 40
	}
};

// let newOBJ = oldOBJ;
// newOBJ['b'] = 5; // value in both objects is changed because, in this caseit is a link to the oldOBJ

function copyOBJ(mainObj) {
	let objCopy = {};
	for (let key in mainObj) {
		objCopy[key] = mainObj[key];
	}
	return objCopy;
};
let copy = copyOBJ(oldOBJ);
copy['b'] = 5;
copy['c']['c1'] = 7;
console.log(oldOBJ);
console.log(copy); 
