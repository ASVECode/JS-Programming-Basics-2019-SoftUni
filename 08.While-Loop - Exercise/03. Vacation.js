function solve(input) {
    let moneyExcursion = Number(input.shift());
    let moneyAvailable = Number(input.shift());
    let counter = 0;

    while (true) {
        let line = input.shift();
        let money = Number(input.shift());

        if (line == 'spend') {
            if (moneyAvailable - money <= 0) {
                moneyAvailable = 0;
            } else {
                moneyAvailable -= money;
            }
        }

        if (line == 'save') {
            moneyAvailable += money;
        }

        if (line == undefined) {
            break;
        }
        counter++;

    }

    if (moneyAvailable >= moneyExcursion) {
        console.log(`You saved the money for ${counter} days.`)
    } else {
        if (counter>=5)
        console.log(`You can't save the money.\n${counter}`)
    }
}
solve([250,
    150,
    'spend',
    50,
    'spend',
    50,
    'save',
    100,
    'save',
    100])