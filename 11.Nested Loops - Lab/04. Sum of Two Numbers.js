function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let magicNum = Number(input.shift());
    let combinations = 0;

    for (let row = start; row <= end; row++) {
        for (let cal = start; cal <= end; cal++) {
            combinations++;
            if (row + cal == magicNum) {
                console.log(`Combination N:${combinations} (${row} + ${cal} = ${magicNum})`);
                return;
            }
        }
    }
    console.log(`${combinations} combinations - neither equals ${magicNum}`);
}
solve(['88',
    '888',
    '1000']);