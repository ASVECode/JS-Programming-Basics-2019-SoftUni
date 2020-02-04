function solve(input) {
    let studentName = input.shift();
    let counter = 1;
    let sum = 0;

    while (counter <= 12) {
        let grade = +input.shift();
        if (grade >= 4) {
            sum += grade;
            counter++;
        }
    }

    console.log(`${studentName} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
}
solve(['Pesho',
    4,
    5.5,
    6,
    5.43,
    4.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5,
    6
])