import styles from './hero.module.css';

export default function hero() {
    return `
        <section class="${styles.hero}">
            <div class="${styles.hero__container}">
                <div class="${styles.hero__container__img}">
                    <span class="${styles.hero__container__img__span1}"></span>
                    <span class="${styles.hero__container__img__span2}"></span>
                    <span class="${styles.hero__container__img__span3}"></span>
                    <img src="./hero__img.png" alt="" class="">
                </div>
                <div class="${styles.hero__container__info}">
                    <h2 class="${styles.hero__container__title}">Take your podcast to the next <strong>level</strong></h2>
                    <span class="${styles.underline}">
                      <img src="./Vector.svg" alt="" class="">
                    </span>
                    <div class="${styles.hero__container__links}">
                        <p class="${styles.hero__container__links__text}">Listen on</p>
                        <div class="${styles.hero__container__links_items}">
                            <a href="https://www.spotify.com/" target="_blank" rel="noopener noreferrer"><img src="./spotifai.svg" alt="" class=""></a>
                            <a href="https://pocketcasts.com/" target="_blank" rel="noopener noreferrer"><img src="./sound.svg" alt="" class=""></a>
                            <a href="https://soundcloud.com/" target="_blank" rel="noopener noreferrer"><img src="./oblako.svg" alt="" class=""></a>
                            <a href="https://podcasts.apple.com/" target="_blank" rel="noopener noreferrer"><img src="./purple.svg" alt="" class=""></a>
                            <a href="https://overcast.fm/" target="_blank" rel="noopener noreferrer"><img src="./1.svg" alt="" class=""></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `
}