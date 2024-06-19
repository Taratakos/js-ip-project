/**  46 Завдання на урок:

1) Реалізувати функціонал, що після заповнення форми та натискання кнопки "Підтвердити" -
новий фільм додається до списку. Сторінка не повинна перезавантажуватись.
Новий фільм повинен додаватися до movieDB.movies.
Для отримання доступу до значення input - звертаємось до нього як input.value;
P.S. Тут є кілька варіантів вирішення завдання, приймається будь-який, але робітник.

2) Якщо назва фільму більша, ніж 21 символ - обрізати його і додати три крапки

3) При кліку на кошик для сміття - елемент буде видалятися зі списку (складно)

4) Якщо у формі стоїть галочка "Зробити улюбленим" - у консоль вивести повідомлення:
"Додаємо улюблений фільм"

5) Фільми повинні бути відсортовані за абеткою 

// для того щоб сказати нашому колу, щоб він брав і чекав завнатаження DOM дерева, замість document можна зустрічати window, але це без різниці

document.addEventListener('DOMContentLoaded', () => {
  //  в колбек функцію поміщаємо наш весь код
})

*/

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
  const addForm = document.querySelector('form.add');
  const addInput = addForm.querySelector('.adding__input');
  const checkbox = addForm.querySelector('[type="checkbox"]');

  // add event handle on for our form
  addForm.addEventListener('submit', (e) => {
    e.preventDefault(); // коли натискатимемо на 'Підтвердити' сторінка не перезавантажуватиметься
    let newFilm = addInput.value;
    const favorite = checkbox.checked;

    if (newFilm) {

      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }

      if (favorite) {
        console.log("Додаємо улюблений фідьм");
      }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies)

      createMovieList(movieDB.movies, movieList);
    }
    e.target.reset();

  });

  const deleteAdv = (arr) => {
    arr.forEach(item => item.remove());
  }

  const makeChanges = () => {
    genre.textContent = 'Драма';

    poster.style.backgroundImage = 'url("./img/bg.jpg")';
  }

  const sortArr = (arr) => {
    arr.sort()
  }

  function createMovieList(films, parent) {
    parent.innerHTML = '';
    sortArr(films)
    films.forEach((film, i) => {
      parent.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
      <div class="delete"></div>
      </li >
      `;
    });

    document.querySelectorAll('.delete').forEach((btn, i) => {
      btn.addEventListener('click', () => {
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);

        createMovieList(films, parent)
      });
    });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList)
});



