function solve(input) {
    let n = Number(input.shift());
    let counter = 0;
    for (let n1 = 0; n1 <= n; n1++) {
        for (let n2 = 0; n2 <= n; n2++) {
            for (let n3 = 0; n3 <= n; n3++) {
                if (n1 + n2 + n3 == n) {
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}
solve(['25'])