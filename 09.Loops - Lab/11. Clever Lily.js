function solve(input) {
    let years = Number(input.shift());
    let priceWashingMachine = Number(input.shift());
    let priceToy = Number(input.shift());
    let moneyYears = 0;
    let sumMoney = 0;
    let toysYears = 0;
    for (let i = 1; i <= years; i++) {
        if (i % 2 == 0) {
            moneyYears++;
        } else {
            toysYears++;
        }
    }

    for (let i = 1; i <= moneyYears; i++) {
        sumMoney += i * 10;
    }

    let totalMoney = (sumMoney + toysYears * priceToy) - moneyYears;

    if ((totalMoney - priceWashingMachine) >= 0) {
        console.log(`Yes! ${(totalMoney - priceWashingMachine).toFixed(2)}`)
    } else {
        console.log(`No! ${(priceWashingMachine - totalMoney).toFixed(2)}`)
    }

}
solve([21,
    1570.98,
    3])