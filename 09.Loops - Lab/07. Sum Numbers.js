function solve(input) {
    let n = +input.shift();
    let sum = 0;
    for (let i = 0; i < n; i++) {
        let num = Number(input.shift());
        sum += num;
    }
    console.log(sum);
}
solve([3, 10, 20, 20])