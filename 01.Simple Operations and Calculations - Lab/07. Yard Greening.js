function solve(input) {
    let squareM = Number(input.shift());
    let sum = squareM * 7.61;
    //let discount = (0.18 * sum).toFixed(2);
    let result = (sum*(1-0.18)).toFixed(2);
    //console.log(`The final price is: ${result} lv.\nThe discount is: ${discount} lv.`);
    console.log(result)
}
solve([540])