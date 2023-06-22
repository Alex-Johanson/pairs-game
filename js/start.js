import { createGameCard } from "./card.js";
import { createIconsArray, duplicateArray, shuffle } from "./utils.js";
import { createGameMenu } from "./menu.js";

export const startGame = (skill) => {
    let firstCard = null;
    let secondCard = null;
    let clickable = true;

    const gameSection = document.querySelector('.game-section__container');
    const gameTable = document.createElement('div');
    const cardsIcons = createIconsArray(skill);
    const duplicateCardsIcons = duplicateArray(cardsIcons);
    shuffle(duplicateCardsIcons);

    gameSection.innerHTML = '';
    const restartBtn = document.createElement('button');
    restartBtn.textContent = 'Сыграть ещё раз';
    restartBtn.classList.add('restart-btn')

    gameTable.classList.add('game-table');

    duplicateCardsIcons.forEach(icon => gameTable.append(createGameCard('question-circle', icon)));

    gameSection.append(gameTable, restartBtn);

    const cards = document.querySelectorAll('.game-card');

    restartBtn.addEventListener('click', createGameMenu);

    cards.forEach((card, index) => card.addEventListener('click', () => {
        if (clickable == true && !card.classList.contains('success')) {
            card.classList.add('touch');

            if (firstCard == null) {
                firstCard = index;
            } else {
                if (index != firstCard) {
                    secondCard = index;
                    clickable = false;
                }
            }

            if (firstCard != null && secondCard != null && firstCard != secondCard) {
                if (cards[firstCard].firstElementChild.className ===
                    cards[secondCard].firstElementChild.className
                ) {
                    setTimeout(() => {
                        cards[firstCard].classList.add('success');
                        cards[secondCard].classList.add('success');

                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 750);
                } else {
                    setTimeout(() => {
                        cards[firstCard].classList.remove('touch');
                        cards[secondCard].classList.remove('touch');

                        firstCard = null;
                        secondCard = null;
                        clickable = true;
                    }, 750);
                }
            }

            if (Array.from(cards).every(card => card.className.includes('touch'))) {
                document.querySelector('congrats').innerHTML = congrats;
            }
        }
    }));

    // console.log(duplicateCardsIcons);
}