import { startGame } from "./start.js";

export const createGameMenu = () => {
    const title = document.createElement('h2');
    title.textContent = 'Выбор сложности';
    title.classList.add('game-menu__title');

    const gameSection = document.querySelector('.game-section__container');
    gameSection.innerHTML = '';    

    const createSkillButton = (skill) => {
        const button = document.createElement('button');
        button.classList.add('game-menu__skill-btn');
        button.textContent = `${skill} карт`;

        button.addEventListener('click', () => startGame(skill))

        return button;
    }

    gameSection.append(
        title,
        createSkillButton(12),
        createSkillButton(16),
        createSkillButton(20),
    )
}