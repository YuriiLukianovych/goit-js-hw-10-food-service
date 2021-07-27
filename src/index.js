import './styles.css';
import templateFunction from './templates/menu-cards.hbs';
import menu from './menu.json';

const ulMenu = document.querySelector('.js-menu');
const markup = templateFunction(menu);
// console.log(templateFunction);
console.log(markup);
console.log(menu[0]);

ulMenu.insertAdjacentHTML('beforeend', markup);
