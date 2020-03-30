function solve(input) {
    let n = Number(input.shift());
    let result = '';
    for (let i = 1111; i <= 9999; i++) {
        let isMagicNum = true;
        let num = String(i);
        for (let j = 0; j < 4; j++) {
            let digit = num[j];
            if (n % Number(digit) != 0) {
                isMagicNum = false;
            }
        }
        if (isMagicNum) {
            result += num + ' '
        } else {
            continue;
        }
    }
    console.log(result)
}
solve(['3'])