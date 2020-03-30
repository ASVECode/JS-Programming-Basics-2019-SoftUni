function solve(input) {
    let budgetAmount = input.shift();
    let budget = Number(budgetAmount);
    let line = input.shift();
    while (line != 'Stop') {
        if (budget <= 0) {
            console.log('Not enough money!')
            break;
        }
        let priceItem = 0;
        for (let i = 0; i < line.length; i++) {
            priceItem += line.charCodeAt(i);
        }
        if (budget > priceItem) {
            console.log(`Item successfully purchased!`)
            budget -= priceItem;

        } else {
            console.log(`Not enough money!`);
            budget -= priceItem;
            break;
        }
        line = input.shift();
    }
    if (budget > 0) {
        console.log(`Money left: ${budget}`);
    }
}
solve(['3000',
    'star',
    'Christmas tree',
    'tinsel',
    'Tree stand'])

// solve(['5000',
//     'Christmas lights',
//     'wreath',
//     'Stop'])