'use strict';

// DB 
const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,
	START: function() {
		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели за последнее время?','');
		}
		return personalMovieDB.count;
	},
	DETECT_PERSONAL_LEVEL: function() {
		if (this.count < 2) {
			console.log('Просмотрено довольно мало фильмов');
		} else if ((this.count >= 2) && (this.count < 5)) {
			console.log('Вы классический зритель');
		} else if (this.count >= 5) {
			console.log('Вы киноман!');
		}
	},
	FILL_DB: () => {
		let lastMovie;
		let lastMovieRating;
		for (let index = 0; index < personalMovieDB.count; index++) {

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
	},
	SHOW_DB: (hidden) => {
		if (!hidden) {
			console.log(personalMovieDB);
		} else {
			console.log('sorry, the database is hidden!');
		}
	},
	TOGGLE_VISIBILITY: function() {
		if (personalMovieDB.private == true) return personalMovieDB.private = false;
		if (personalMovieDB.private == false) return personalMovieDB.private = true;
	},
	// showCount() {
	// 	alert(this.count);
	// }
};

personalMovieDB.START();
// personalMovieDB.FILL_DB();
// personalMovieDB.TOGGLE_VISIBILITY();
personalMovieDB.DETECT_PERSONAL_LEVEL(personalMovieDB);
// personalMovieDB.showCount();
personalMovieDB.SHOW_DB(personalMovieDB.private);
