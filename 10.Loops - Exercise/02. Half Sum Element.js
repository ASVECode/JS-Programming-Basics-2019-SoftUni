function solve(input) {
    let n = Number(input.shift());
    let sum = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        sum += num;
        if (num > maxNum) {
            maxNum = num;
        }
    }
    if (sum == 2 * maxNum) {
        console.log('Yes');
        console.log(`Sum = ${maxNum}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(sum - 2 * maxNum)}`);
    }
}

solve(['3',
    '5',
    '5',
    '1'])