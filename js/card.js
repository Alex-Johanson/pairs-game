export const createGameCard = (backsideIcon, frontsideIcon) => {
    const card = document.createElement('div');
    card.classList.add('game-card');

    const backsideCardI = document.createElement('i');
    const frontsideCardI = document.createElement('i');

    backsideCardI.classList.add('fa', `fa-${backsideIcon}`);
    frontsideCardI.classList.add('fa', `fa-${frontsideIcon}`);

    card.append(frontsideCardI, backsideCardI);

    return card;
}