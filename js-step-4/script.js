/* Завдання на урок:

1) У нас вже є робоча програма, що складається з окремих функцій. Уявіть, що
перед вами стоїть завдання переписати його так, щоб усі функції стали методами об'єкта personalMovieDB
Таке трапляється у реальних продуктах при зміні технологій чи підходу до архітектури програми.

2) Створити метод toggleVisibleMyDB, який при викликі перевірятиме властивість private. Якщо воно false – він
перемикає його в true, якщо true - перемикає на false. Протестувати разом із showMyDB.

3) У методі writeYourGenres заборонити користувачеві натиснути кнопку "скасувати" або залишати порожній рядок.
Якщо він це зробив - повертати його до цього питання. Після того, як усі жанри введені -
за допомогою методу forEach вивести в консоль повідомлення в такому вигляді:
"Улюблений жанр #(номер по порядку, починаючи з 1) - це (назва з масиву)"*/

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function () {
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Скільки фільмів ви вже переглянули?', '');
    }
  },
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt('Один з останніх переглянутих фільмів ?', '').trim(),
        b = prompt('На скільки оціните його ?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
      } else {
        console.log('error');
        i--;
      }
    }
  },
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Переглянуто мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log("Ви класичний глядач");
    } else if (personalMovieDB.count >= 30) {
      console.log("Ви кіноман");
    } else {
      console.log("Виникла помилка");
    }
  },
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },

  writeYourGenres: function () {
    for (let i = 1; i <= 3; i++) {
      const genres = prompt(`Ваш улюблений жанр під номером ${i}`, '').toLocaleLowerCase();

      if (genres === '' || genres === null) {
        console.log('Ви ввели некоректні дані, або не ввели їх зовсім');
        i--; // якщо так, відкотитися на 1 ітерацію назад
      } else {
        personalMovieDB.genres[i - 1] = genres
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Улюблений жанр ${i + 1} - це ${item}`);
    })
  }
}