function solve(input) {
    let n = Number(input.shift());
    let oddSum = 0;
    let evenSum = 0;
    let minNumEven = Number.MAX_SAFE_INTEGER;
    let maxNumEven = Number.MIN_SAFE_INTEGER;
    let minNumOdd = Number.MAX_SAFE_INTEGER;
    let maxNumOdd = Number.MIN_SAFE_INTEGER;

    for (let i = 1; i <= n; i++) {
        let num = Number(input.shift());
        if (i % 2 == 0) {
            evenSum += num;
            if (num > maxNumEven) {
                maxNumEven = num;
            }
            if (num < minNumEven) {
                minNumEven = num;
            }
        } else {
            oddSum += num;
            if (num > maxNumOdd) {
                maxNumOdd = num;
            }
            if (num < minNumOdd) {
                minNumOdd = num;
            }
        }

    }
    console.log(`OddSum=${oddSum.toFixed(2)},`);
    if (minNumOdd != Number.MAX_SAFE_INTEGER) {
        console.log(`OddMin=${minNumOdd.toFixed(2)},`)
    } else {
        console.log(`OddMin=No,`);
    }
    if (maxNumOdd != Number.MIN_SAFE_INTEGER) {
        console.log(`OddMax=${maxNumOdd.toFixed(2)},`);
    } else {
        console.log(`OddMax=No,`);
    }
    console.log(`EvenSum=${evenSum.toFixed(2)},`);
    if (minNumEven != Number.MAX_SAFE_INTEGER) {
        console.log(`EvenMin=${minNumEven.toFixed(2)},`);
    } else {
        console.log(`EvenMin=No,`);
    }

    if (maxNumEven != Number.MIN_SAFE_INTEGER) {
        console.log(`EvenMax=${maxNumEven.toFixed(2)}`);
    } else {
        console.log(`EvenMax=No`);

    }
}
solve(['1', '1'])