function solve(input) {
    let firstPlayer = Number(input.shift());
    let secondPlayer = Number(input.shift());
    let thirdPlayer = Number(input.shift());

    let sum = firstPlayer + secondPlayer + thirdPlayer;
    let minutes = Math.floor(sum / 60);
    let seconds = Math.floor(sum % 60);
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    console.log(`${minutes}:${seconds}`);

}
solve(['35', '45', '44'])