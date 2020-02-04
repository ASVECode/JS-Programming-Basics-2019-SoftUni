function solve(input) {
    let n = Number(input.shift());
    let current = 1;
    for (let i = 0; i <= n; i += 2) {
        console.log(current);
        current *= 4;
    }

}
solve([10])