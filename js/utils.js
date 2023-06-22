export const shuffle = (array) => {
    let mixedArr = array.sort(() => Math.random() - 0.5)

    return array;
}

export const duplicateArray = (array) => array.reduce((res, current) => res.concat([current, current]), []);

export const createIconsArray = (initialCount) => {
    const cardsIcons = [
        'compass',
        'cloud',
        'play',
        'bolt',
        'stop',
        'cogs',
        'atom',
        'basketball-ball',
        'key',
        'smile',
    ];

    switch (initialCount) {
        case 12:
            return cardsIcons.slice(0, 6);
            break;

        case 16:
            return cardsIcons.slice(0, 8);
            break;

        case 20:
            return cardsIcons;
            break;
        
        default: 
            break;
    };
}