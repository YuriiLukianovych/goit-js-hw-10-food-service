import './styles.css';
import templateFunction from './templates/menu-cards.hbs';
import menu from './menu.json';
import { classBody } from 'babel-types';

// список тем страницы
const Theme = {
   LIGHT: 'light-theme',
   DARK: 'dark-theme',
};

const ulMenu = document.querySelector('.js-menu');
const checkbox = document.querySelector('#theme-switch-toggle');

themeCustomization(); // загрузка выбранной пользователем темы из localStorage

// создать разметку
const markup = templateFunction(menu);

// добавить разметку в html-страницу
ulMenu.insertAdjacentHTML('beforeend', markup);

// добавить слушателя на checkbox
checkbox.addEventListener('change', onChangeCheckbox);

function onChangeCheckbox() {
   console.log(checkbox.checked);
   if (checkbox.checked) {
      document.body.classList.remove(Theme.LIGHT);
      document.body.classList.add(Theme.DARK);
      localStorage.setItem('theme', Theme.DARK);
   } else {
      document.body.classList.remove(Theme.DARK);
      document.body.classList.add(Theme.LIGHT);
      localStorage.setItem('theme', Theme.LIGHT);
   }
}

// функция загрузки выбранной пользователем темы из localStorage
function themeCustomization() {
   if (localStorage.getItem('theme') === Theme.DARK) {
      document.body.classList.add(Theme.DARK);
      checkbox.checked = true;
   }
   // document.body.classList.add(Theme.LIGHT);
}
