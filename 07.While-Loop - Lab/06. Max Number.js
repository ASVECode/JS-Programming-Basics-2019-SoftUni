function solve(input) {
    let numbers = +input.shift();
    let counter = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;

    while (counter < numbers) {
        let num = +input.shift();
        if (num > maxNum) {
            maxNum = num;
        }
        counter++;
    }

    console.log(maxNum);
}
solve([3, -10, -20, 20])