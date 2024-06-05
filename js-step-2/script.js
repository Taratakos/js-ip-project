/**
 * Цикли

for (let i = 0; i < 10; i++) {
  if (i === 6) {
    // break
    continue;
  }
  console.log(i);
}

for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}

// *
// **
// ***
// ****
// *****
// ******

let result = '';
const lengthA = 7;

for (let i = 1; i < lengthA; i++) {
  for (let j = 0; j < i; j++) {
    result += '*'
  }

  result += '\n';
}

console.log(result);
*/

/* Завдання на урок 2:

1) Автоматизувати запитання користувачеві про фільми за допомогою циклу

2) Зробити так, щоб користувач не міг залишити відповідь у вигляді порожнього рядка,
скасувати відповідь або ввести назву фільму довше 50 символів. Якщо це відбувається -
повертаємо користувача до питань знову. (До будь-якого рядка можна звернутися як
str.length - і одержати її довжину)

3) За допомогою умов перевірити personalMovieDB.count, і якщо він менше 10 - вивести повідомлення
"Переглянуто досить мало фільмів", якщо від 10 до 30 - "Ви класичний глядач", а якщо більше -
"Ви кіноман". А якщо не підійшло до жодного варіанту - "Відбулася помилка"

4) Потренуватися та переписати цикл ще двома способами*/

'use strict'
const numberOfFilms = +prompt('Скільки фільмів ви вже переглянули?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
}

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

// 2-variant
// let i = 0;
// while (i < 2) {
//   const a = prompt('Один з останніх переглянутих фільмів ?', ''),
//     b = prompt('На скільки оціните його ?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//     i += 1;
//   } else {
//     console.log('error');
//   }
// }

// 3-variant
// let i = 0;
// do {
//   const a = prompt('Один з останніх переглянутих фільмів ?', ''),
//     b = prompt('На скільки оціните його ?', '');
//   if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//     personalMovieDB.movies[a] = b;
//     console.log('done');
//     i += 1;
//   } else {
//     console.log('error');
//   }
// }
// while (i < 2)

console.log(personalMovieDB);

