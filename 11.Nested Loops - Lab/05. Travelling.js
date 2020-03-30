function solve(input) {
    while (true) {
        let destination = input.shift();
        let moneyNeeded = Number(input.shift());
        let moneySaved = 0;
        if (destination == 'End') {
            break;
        }
        while (true) {
            let line = input.shift();
            let money = Number(line);
            moneySaved += money;
            if (moneySaved >= moneyNeeded) {
                console.log(`Going to ${destination}!`);
                break;
            }
        }
    }

}
solve([
    'Greece', '1000', '200',
    '200', '300', '100',
    '150', '240', 'Spain',
    '1200', '300', '500',
    '193', '423', 'End',
    ''
])