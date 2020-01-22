function solve(input) {
    let N1 = Number(input.shift());
    let N2 = Number(input.shift());
    let mathOperator = input.shift();
    let result = 0;
    let output = '';
    let oddEven = '';

    if (N2 === 0 && (mathOperator === '/' || mathOperator === '%')) {
        output = `Cannot divide ${N1} by zero`;
    } else if (mathOperator === '/') {
        result = (N1 / N2).toFixed(2);
        output = `${N1} / ${N2} = ${result}`
    } else if (mathOperator === '%') {
        result = N1 % N2;
        output = `${N1} % ${N2} = ${result}`
    } else {
        if (mathOperator === '+') {
            result = N1 + N2;
        } else if (mathOperator === '-') {
            result = N1 - N2;
        } else if (mathOperator === '*') {
            result = N1 * N2;
        }

        output = `${N1} ${mathOperator} ${N2} = ${result} - ${result % 2 === 0 ? 'even' : 'odd'}`;
    }
    console.log(output);
}
solve([10, 0, '+']);