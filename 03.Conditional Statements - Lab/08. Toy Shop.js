function solve(input) {
    let excursionCost = Number(input.shift());
    let puzzles = Number(input.shift());
    let toys = Number(input.shift());
    let bearToys = Number(input.shift());
    let minions = Number(input.shift());
    let trucks = Number(input.shift());
    let totalNumToys = puzzles + toys + bearToys + minions + trucks;
    let profit = puzzles * 2.60 + toys * 3.00 + bearToys * 4.10 + minions * 8.20 + trucks * 2.00;
    let moneyForExcursion = Number((profit * (1 - 0.1)).toFixed(2));
    if (totalNumToys >= 50) {
        moneyForExcursion = (profit * (1 - 0.25)) * (1 - 0.10)
    }
    if (moneyForExcursion >= excursionCost) {
        console.log(`Yes! ${(moneyForExcursion - excursionCost).toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${Math.abs(moneyForExcursion - excursionCost).toFixed(2)} lv needed.`)
    }
}
solve([40.8, 20,25,30,50,10])