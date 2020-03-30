function solve(input) {
    let floors = Number(input.shift());
    let rooms = Number(input.shift());
    let result = '';

    for (let row = 1; row <= floors; row++) {
        result = '';
        for (let col = 0; col < rooms; col++) {
            if (col % 2 == 0) {
                result += `O${row}${col}` + ' ';
            }
            if (col % 2 != 0) {
                result += `A${row}${col}` + ' ';
            };
        }
        col= 0;
    }
    console.log(result)

}

solve(['6', '4'])