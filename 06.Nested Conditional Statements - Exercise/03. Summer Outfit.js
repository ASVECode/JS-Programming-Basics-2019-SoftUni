function solve(input) {
    let degree = Number(input.shift());
    let time = input.shift();
    let outfit = '';
    let shoes = '';

    switch (time) {
        case 'Morning':
            if (degree >= 10 && degree <= 18) {
                outfit = 'Sweatshirt';
                shoes = 'Sneakers';
            } else if (degree > 18 && degree <= 24) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            }
            break;
        case 'Afternoon':
            if (degree >= 10 && degree <= 18) {
                outfit = 'Shirt';
                shoes = 'Moccasins';
            } else if (degree > 18 && degree <= 24) {
                outfit = 'T-Shirt';
                shoes = 'Sandals';
            } else {
                outfit = 'Swim Suit';
                shoes = 'Barefoot';
            }
            break;
        default:
            outfit = 'Shirt';
            shoes = 'Moccasins';
            break;

    }
    console.log(`It's ${degree} degrees, get your ${outfit} and ${shoes}.`);
}
solve([16,'Morning'])