function solve(input) {
    let years = Number(input.shift());
    let sex = input.shift();

    if (years >= 16) {
        if (sex == 'm') {
            console.log('Mr.')
        } else {
            console.log('Ms.')
        }
    } else {
        if (sex == 'm') {
            console.log('Master')
        } else {
            console.log('Miss')
        }
    }

}
solve(['17', 'm'])