function solve(input) {
    let n = Number(input.shift());
    let result = ''
    let num = 1;
    for (let row = 1; row <= n; row++) {
        for (let number = 1; number <= row; number++) {
            if (num > n) {
                break;
            }
            result += num + ' ';
            num++;

        }
        console.log(result);
        result = '';
    }
}
solve(['15'])