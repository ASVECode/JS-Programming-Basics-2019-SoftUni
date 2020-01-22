function solve(input) {
    let typeOfFlowers = input.shift();
    let numberOfFlowers = Number(input.shift());
    let budget = Number(input.shift());

    let moneyNeeded = 0;

    if (typeOfFlowers == 'Roses') {
        if (numberOfFlowers > 80) {
            moneyNeeded = numberOfFlowers * 5 - ((numberOfFlowers * 5) * 0.10);
        } else {
            moneyNeeded = numberOfFlowers * 5;
        }
    } else if (typeOfFlowers == 'Dahlias') {
        if (numberOfFlowers > 90) {
            moneyNeeded = numberOfFlowers * 3.8 - ((numberOfFlowers * 3.8) * 0.15);
        } else {
            moneyNeeded = numberOfFlowers * 3.8;
        }
    } else if (typeOfFlowers == 'Tulips') {
        if (numberOfFlowers > 80) {
            moneyNeeded = numberOfFlowers * 2.8 - ((numberOfFlowers * 2.8) * 0.15);
        } else {
            moneyNeeded = numberOfFlowers * 2.8;
        }
    } else if (typeOfFlowers == 'Narcissus') {
        if (numberOfFlowers < 120) {
            moneyNeeded = numberOfFlowers * 3 + ((numberOfFlowers * 3) * 0.15);
        } else {
            moneyNeeded = numberOfFlowers * 3;
        }
    } else {
        if (numberOfFlowers < 80) {
            moneyNeeded = numberOfFlowers * 2.5 + ((numberOfFlowers * 2.5) * 0.20);
        } else {
            moneyNeeded = numberOfFlowers * 2.5;
        }
    }

    if (budget >= moneyNeeded) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlowers} and ${(budget - moneyNeeded).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${(moneyNeeded - budget).toFixed(2)} leva more.`);
    }

}
solve(['Gladiols', 64, 160])