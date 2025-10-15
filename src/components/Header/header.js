import styles from './header.module.css';

export default function header() {
  return `
    <header class="${styles.header} header">
      <div class="${styles.header__div}">
        <div class="${styles.header__logo}">
          <img src="./logo.png" alt="">
        </div>
        <nav class="${styles.header__menu}">
          <ul class="${styles.header__ul}">
            <li class="${styles.header__ul__item}"><a href="#" class="link">Home</a></li>
            <li class="${styles.header__ul__item}"><a href="#" class="link">Episodes</a></li>
            <li class="${styles.header__ul__item}"><a href="#" class="link">About</a></li>
            <li class="${styles.header__ul__item}"><a href="#" class="link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  `;
}
