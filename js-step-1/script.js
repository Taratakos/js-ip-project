/* Завдання на урок:

1) Створити змінну numberOfFilms і помістити відповідь від користувача на запитання:
'Скільки фільмів ви вже подивилися?'

2) Створити об'єкт personalMovieDB і в нього помістити такі властивості:
 - count – сюди передається відповідь на перше запитання
 - movies - у цю властивість помістити порожній об'єкт
 - actors - теж розмістити порожній об'єкт
 - genres - сюди помістити порожній масив
 - privat - в цю властивість помістити boolean(логічне) значення false

3) Задайте користувачеві двічі питання:
 - 'Один із останніх переглянутих фільмів?'
 - 'На скільки оціните його?'
Відповіді варто помістити в окремі змінні
Записати відповіді в об'єкт movies у форматі:
 movies: {
 'Logan': '8.1'
 }

Перевірити, щоб все працювало без помилок у консолі */

'use strict'
const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

const a = prompt('Один з останніх переглянутих фільмів ?', ''),
  b = prompt('На скільки оціните його ?', ''),
  c = prompt('Один з останніх переглянутих фільмів ?', ''),
  d = prompt('На скільки оціните його ?', '')

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);