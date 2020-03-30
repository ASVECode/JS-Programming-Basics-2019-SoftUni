function solve(input) {
    let moneyWanted = Number(input.shift());
    let numFantasyBooks = Number(input.shift());
    let numHorrorBooks = Number(input.shift());
    let numRomanticBooks = Number(input.shift());

    let collectedMoney = Number((numFantasyBooks * 14.90 + numHorrorBooks * 9.80 + numRomanticBooks * 4.30).toFixed(2));
    let DDS = Number((collectedMoney * 0.2).toFixed(2));
    let finalMoney = Number((collectedMoney - DDS).toFixed(2));
    if (finalMoney >= moneyWanted) {
        let bonus = Math.floor((finalMoney - moneyWanted) * 0.10);
        collectedMoney = (finalMoney - bonus).toFixed(2);
        console.log(`${collectedMoney} leva donated.`)
        console.log(`Sellers will receive ${bonus} leva.`)
    } else {
        console.log(`${moneyWanted - finalMoney} money needed.`)
    }
}
solve(['200',
    '15',
    '10',
    '5'])