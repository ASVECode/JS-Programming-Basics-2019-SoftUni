function solve(input) {

    let movieBudget = Number(input.shift());
    let people = Number(input.shift());
    let clothPrice = Number(input.shift());
    let decor = movieBudget * 0.10;

    if (people > 150) {
        clothPrice = clothPrice - clothPrice * 0.10;
    }

    let moneyNeeded = people * clothPrice + decor;
    if (moneyNeeded <= movieBudget) {
        console.log(`Action!\nWingard starts filming with ${(movieBudget - moneyNeeded).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money!\nWingard needs ${(moneyNeeded - movieBudget).toFixed(2)} leva more.`)
    }

}
solve(['9587.88', '222', '57.99'])