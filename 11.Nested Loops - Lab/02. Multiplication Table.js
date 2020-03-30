function solve() {
    for (let row = 1; row <= 10; row++) {
        col = 1;
        for (let col = 1; col <= 10; col++) {
            console.log(`${row} * ${col} = ${col * row}`)
        }
    }
}
solve()

// function solve() {
//     let result = '';
//     for (let row = 1; row <= 10; row++) {
//         col = 1;
//         result = '';
//         for (let col = 1; col <= 10; col++) {
//             result += col * row + ' ';
//         }
//         console.log(result);
//     }
// }
// solve()