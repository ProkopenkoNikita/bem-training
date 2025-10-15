import './base.css';
import './reset.css';
import header from './components/Header/header.js';
import styles from './components/Header/header.module.css'; // добавьте импорт


const app = document.querySelector('#app');
app.innerHTML = header(); // вставляем HTML

const navLinks = document.querySelectorAll('.link');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    navLinks.forEach(l => l.classList.remove(styles.active)); // удаляем модульный класс
    link.classList.add(styles.active); // добавляем модульный класс
  });
});