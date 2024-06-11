/** 26 Function practice
 * Завдання уроку:

1) Повторити першу частину завдання за уроком

2) Створіть функцію showMyDB, яка перевірятиме властивість privat. Якщо стоїть на позиціях
false - відображає головний об'єкт програми в консолі

3) Створіть функцію writeYourGenres, у якій користувач відповість на запитання 3 рази
«Ваш улюблений жанр під номером ${number in order}». Кожна відповідь записується в масив даних
жанри

P.S. Викликати функції не є обов'язковим
 */

'use strict'
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');
  }
}

// start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

function rememberMyFilms() {
  // 1-variant
  for (let i = 0; i < 2; i++) {
    const a = prompt('Один з останніх переглянутих фільмів ?', ''),
      b = prompt('На скільки оціните його ?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
    } else {
      console.log('error');
      i--;
    }
  }
}

// rememberMyFilms()

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Переглянуто мало фильмов");
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ви класичний глядач");
  } else if (personalMovieDB.count >= 30) {
    console.log("Ви кіноман");
  } else {
    console.log("Виникла помилка");
  }
}

// detectPersonalLevel()



// 2) Створіть функцію showMyDB, яка перевірятиме приватну властивість.Якщо стоїть на позиціях false - відображає головний об'єкт програми в консолі
function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

// 3) Створіть функцію writeYourGenres, у якій користувач відповість на запитання 3 рази
// «Ваш улюблений жанр під номером ${ number in order }». Кожна відповідь записується в масив даних
// жанри

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш улюблений жанр під номером ${i}`, '')
    personalMovieDB.genres[i - 1] = genre
  }
}

writeYourGenres();