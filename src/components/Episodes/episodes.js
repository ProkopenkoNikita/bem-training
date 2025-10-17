import styles from './episodes.module.css';

export default function episodes() {
    return `
    <section class="${styles.episodes}">
        <div class="${styles.episodes__container}">
            <div class="${styles.episodes__container__title}">
                <h2 class="${styles.episodes__container__title__item}">Latest episodes</h2>
                <button class="${styles.episodes__container__title__btn}">View all episodes</button>
            </div>
            <div class="${styles.episodes__container__cards}">
                <div class="${styles.episodes__container__card}">
                    <img src="./card1.png" alt="">
                    <div class="${styles.episodes__container__card__info}">
                        <span class="${styles.episodes__container__card__info__span} ${styles.span1}">Gear</span>
                        <a href="" class="">Episode  3</a>
                        <h2>Should you get outboard audio gear?</h2>
                        <p class="${styles.episodes__container__card__info__p}">Is hardware really worth it when it comes to podcasting? The answer is...it depends.
                            Here’s our reasons on why you might want to consider picking something up.</p>
                        <button class="${styles.episodes__container__card__info__btn} ${styles.btn}">View Episode Details</button>
                    </div>
                </div>
                <div class="${styles.episodes__container__card}">
                    <img src="./card2.png" alt="">
                    <div class="${styles.episodes__container__card__info}">
                        <span class="${styles.episodes__container__card__info__span} ${styles.span}">Tips & Tricks</span>
                        <a href="" class="">Episode  2</a>
                        <h2>Mic tricks to take you to the next level</h2>
                        <p>Stop rolling with those default settings on your mic. These small tweaks will take you from sounding good to great.</p>
                        <button class="${styles.episodes__container__card__info__btn}">View Episode Details</button>
                    </div>
                </div>
                <div class="${styles.episodes__container__card}">
                    <img src="./card3.png" alt="">
                    <div class="${styles.episodes__container__card__info}">
                        <span class="${styles.episodes__container__card__info__span}">Gear</span>
                        <a href="" class="">Episode  1</a>
                        <h2 class="${styles.episodes__container__card__info__title}">The best microphone under $200</h2>
                        <p>With so many microphones on the market, how are you supposed to know what’s the best? Take a look at our top picks.</p>
                        <button class="${styles.episodes__container__card__info__btn}">View Episode Details</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    `
}