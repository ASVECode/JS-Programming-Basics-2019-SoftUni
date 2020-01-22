function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let numOfFishermen = Number(input.shift());
    let moneyNeeded = 0;

    switch (season) {
        case 'Spring':
            if (numOfFishermen <= 6) {
                moneyNeeded = 3000 - 3000 * 0.10;
            } else if (numOfFishermen >= 7 && numOfFishermen <= 11) {
                moneyNeeded = 3000 - 3000 * 0.15;
            } else {
                moneyNeeded = 3000 - 3000 * 0.25;
            }
            break;
        case 'Summer':
        case 'Autumn':
            if (numOfFishermen <= 6) {
                moneyNeeded = 4200 - 4200 * 0.10;
            } else if (numOfFishermen >= 7 && numOfFishermen <= 11) {
                moneyNeeded = 4200 - 4200 * 0.15;
            } else {
                moneyNeeded = 4200 - 4200 * 0.25;
            }
            break;
        default:
            if (numOfFishermen <= 6) {
                moneyNeeded = 2600 - 2600 * 0.10;
            } else if (numOfFishermen >= 7 && numOfFishermen <= 11) {
                moneyNeeded = 2600 - 2600 * 0.15;
            } else {
                moneyNeeded = 2600 - 2600 * 0.25;
            }
            break;

    }

    if (numOfFishermen % 2 == 0 && season != 'Autumn') {
        moneyNeeded = moneyNeeded - moneyNeeded * 0.05;
    }
    if (budget >= moneyNeeded) {
        console.log(`Yes! You have ${(budget - moneyNeeded).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${(moneyNeeded - budget).toFixed(2)} leva.`);
    }
}
solve([3000, 'Autumn', 11])