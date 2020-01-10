function solve(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let area = Math.abs((x1 - x2) * (y1 - y2));
    let perimeter = 2 * (Math.abs(x1 - x2) + Math.abs(y1 - y2));
    console.log(`${area.toFixed(2)} \n${perimeter.toFixed(2)}`)
}
solve([60,20,10,50])