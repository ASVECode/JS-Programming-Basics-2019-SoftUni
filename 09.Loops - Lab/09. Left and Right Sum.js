function solve(input) {
    let n = +input.shift();
    let leftSum = 0;
    let rightSum = 0;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        leftSum += num;
    }
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        rightSum += num;
    }
    if (leftSum == rightSum) {
        console.log(`Yes, sum = ${leftSum}`)
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`)
    }

}

solve([2, 10, 20, 18, 10])