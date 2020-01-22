function solve(input) {

    let hours = Number(input.shift());
    let minutes = Number(input.shift());
    minutes += hours * 60 + 15;
    let hoursToPrint = Math.floor(minutes / 60);
    let minutesToPrint = minutes - hoursToPrint * 60;

    if (hoursToPrint > 23) {
        hoursToPrint -= 24;
    }

    if (minutesToPrint < 10) {
        minutesToPrint = '0' + minutesToPrint;
    }

    console.log(`${hoursToPrint}:${minutesToPrint}`)
}
solve(['0', '44'])