function solve(input) {
    let num = input.shift();
    let finalResult = '';
    for (let i = num.length - 1; i > -1; i--) {
        let digit = Number(num[i]);
        if (digit == 0) {
            console.log('ZERO');
            continue;
        }
        for (let j = 0; j <= num[i] - 1; j++) {
            finalResult += String.fromCharCode(digit + 33) + '';
        }
        console.log(finalResult);
        finalResult = '';
    }
}
solve(['201'])