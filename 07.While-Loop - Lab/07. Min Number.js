function solve(input) {
    let numbers = +input.shift();
    let counter = 0;
    let minNum = Number.MAX_SAFE_INTEGER;

    while (counter < numbers) {
        let num = +input.shift();
        if (num < minNum) {
            minNum = num;
        }
        counter++;
    }

    console.log(minNum);
}
solve([2, 100, 99])