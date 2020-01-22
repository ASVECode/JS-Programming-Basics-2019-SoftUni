function solve(input) {
    let points = Number(input.shift());
    let result = points;
    if (points % 2 === 0) {
        result += 1;
    } else if (points % 10 === 5) {
        result += 2
    }

    if (points <= 100) {
        result += 5;
    } else if (points > 100 && points < 1000) {
        result = result + points * 0.2;

    } else {
        result = result + points * 0.1;
    }

    let bonusPoints = result - points;
    console.log(`${bonusPoints}\n${result}`);
}
solve([2073])