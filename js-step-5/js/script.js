/* Задания на урок:

1) Видалити всі рекламні блоки зі сторінки (права частина сайту)

2) Змінити жанр фільму, змінити "комедію" на "драму"

3) Змінити задній фон постера з фільмом на зображення "bg.jpg". Воно лежить в папці img.
Реалізувати тільки за допомогою JS

4) Список фільмів на сторінці сформувати на основі даних із цього файлу JS.
Відсортувати їх за алфавітом

5) Додати нумерацію виведених фільмів */

'use strict';

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против..."
  ]
};

const adv = document.querySelectorAll('.promo__adv img');
const poster = document.querySelector('.promo__bg')
const genre = poster.querySelector('.promo__genre');
const movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => item.remove());
// 2
genre.textContent = 'Драма';
// 3
poster.style.backgroundImage = 'url("./img/bg.jpg")';
// 4
movieList.innerHTML = '';
movieDB.movies.sort()
// 5
movieDB.movies.forEach((film, i) => {
  movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
      </li >
      `;
});