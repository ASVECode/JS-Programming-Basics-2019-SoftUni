function solve(input) {
    let num = +input.shift();
    let k = 1;

    while (k <= num) {
        console.log(k);
        k = k * 2 + 1;
    }

}
solve([8])