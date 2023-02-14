const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
	count:numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let index = 0; index < numberOfFilms; index++) {
	const lastMovie = prompt('Один из последних фильмов?','');
	const lastMovieRating = prompt('На сколько его оцените?','');
	personalMovieDB.movies[lastMovie] = lastMovieRating;
};



console.log(personalMovieDB);