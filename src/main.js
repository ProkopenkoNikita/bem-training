import './base.css';
import './reset.css';
import header from './components/Header/header.js';
import header_styles from './components/Header/header.module.css'; // добавьте импорт
import hero from './components/Hero/hero.js';
import hero_styles from './components/Hero/hero.module.css'; // добавьте импорт
import episodes from './components/Episodes/episodes.js';
import episodes_styles from './components/Episodes/episodes.module.css';


const app = document.querySelector('#app');
app.innerHTML = header(); // вставляем HTML
app.innerHTML += hero(); // вставляем HTML
app.innerHTML += episodes()// вставляем HTML


const navLinks = document.querySelectorAll('.link');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    navLinks.forEach(l => l.classList.remove(header_styles.active)); // удаляем модульный класс
    link.classList.add(header_styles.active); // добавляем модульный класс
  });
});
