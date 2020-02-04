function solve(input) {
    let n = +input.shift();
    let evenSum = 0;
    let oddSum = 0;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (i % 2 == 0) {
            evenSum += num;
        } else {
            oddSum += num;
        }

    }
    if (oddSum == evenSum) {
        console.log(`Yes\nSum = ${evenSum}`)
    } else {
        console.log(`No\nDiff = ${Math.abs(oddSum - evenSum)}`)
    }

}
solve([4, 10, 50, 60, 20])
