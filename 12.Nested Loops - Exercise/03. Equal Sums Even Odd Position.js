function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let result = '';
    for (let i = start; i <= end; i++) {
        let num = i + '';
        let sumEven = 0;
        let sumOdd = 0;
        for (let j = 0; j < num.length; j++) {
            if (j % 2 == 0) {
                sumEven += Number(num[j]);
            } else {
                sumOdd += Number(num[j]);
            }
        }
        if (sumEven == sumOdd) {
            result += num + ' ';
        }
    }
    console.log(result);
}

solve(['100000',
    '100050'])
