function solve(input) {
    let n = +input.shift();
    let maxNum = Number.MIN_SAFE_INTEGER;
    let minNum = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        if (num > maxNum) {
            maxNum = num;
        }
        if (num < minNum) {
            minNum = num;
        }
    }
    console.log(`Max number: ${maxNum}`);
    console.log(`Min number: ${minNum}`);
}

solve([3, 10, 20, 30])