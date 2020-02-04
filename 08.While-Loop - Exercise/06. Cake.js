function solve(input) {
    let width = +input.shift();
    let length = +input.shift();
    let cakeSize = Number(width * length);
    let pieces;

    while (cakeSize > 0) {
        let line = input.shift();
        if (line == 'STOP') {
            console.log(`${cakeSize} pieces are left.`)
            break;
        }

        pieces = Number(line);

        if ((cakeSize - pieces) > 0) {
            cakeSize -= pieces;
        } else {
            let leftover = Math.abs(cakeSize - pieces);
            console.log(`No more cake left! You need ${leftover} pieces more.`);
            break;
        }
    }
}

solve([
    '10',
    '2',
    '2',
    '4',
    '6',
    'STOP'
])