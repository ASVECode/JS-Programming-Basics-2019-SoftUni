function solve(input) {
    let num = Number(input.shift());
    switch (num) {
        case 1: num = 'one'; break;
        case 2: num = 'two'; break;
        case 3: num = 'three'; break;
        case 4: num = 'four'; break;
        case 5: num = 'five'; break;
        case 6: num = 'six'; break;
        case 7: num = 'seven'; break;
        case 8: num = 'eight'; break;
        case 9: num = 'nine'; break;
        default: num = 'number too big'

    }
    console.log(num)
}
solve([15])