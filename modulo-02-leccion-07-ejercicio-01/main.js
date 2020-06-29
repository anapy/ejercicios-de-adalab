'use strict';

/**EJERCICIO 1 -- Películas */
function workWithMovies() {
  const films = ['Capitana Marvel', 'Thor', 'Capitán América'];
  films[3] = 'Thor 2';
  films[3] = 'Titanic';
  films[0] = 'Orgullo y prejuicio';

  for(const film of films) {
    console.log(film);
  }
}

workWithMovies();

