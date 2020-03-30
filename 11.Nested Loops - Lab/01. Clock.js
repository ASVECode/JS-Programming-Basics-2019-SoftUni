// function solve() {
//     for (let hours = 0; hours < 24; hours++) {
//         for (let min = 0; min < 60; min++) {
//             console.log(`${hours}:${min}`);
//         }
//     }
// }
// solve()
function solve() {
    let min = 0;
    let hours = 0;
    while (hours < 24) {
        min=0;
        while (min < 60) {
            console.log(`${hours}:${min}`);
            min++;
        }
        hours++;
    }
}
solve()