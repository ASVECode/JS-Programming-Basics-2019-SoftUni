function solve(input) {
    let tableNum = Number(input.shift());
    let tableLength = Number(input.shift());
    let tableWidth = Number(input.shift());
    let areaTablecloth = (tableLength + 2 * 0.30) * (tableWidth + 2 * 0.30);
    let areaQuads = Math.pow(tableLength / 2, 2);
    let priceInDollars = tableNum * (areaTablecloth * 7 + areaQuads * 9);
    let priceInLevas = priceInDollars * 1.85;
    console.log(`${priceInDollars.toFixed(2)} USD \n${priceInLevas.toFixed(2)} BGN`)
}
solve([10,1.20,0.65])