function solve(input) {
    let studentName = input.shift();
    let counter = 1;
    let excluded = 0;
    let sum = 0;
    let isExcluded = false;
    while (counter <= 12) {
        let grade = +input.shift();
        if (grade >= 4) {
            sum += grade;
            counter++;
        }
        if (grade < 4) {
            excluded++;
        }
        if (excluded >= 2) {
            isExcluded = true;
            break;
        }

    }
    if (isExcluded == false) {
        console.log(`${studentName} graduated. Average grade: ${(sum / 12).toFixed(2)}`);
    } else {
        console.log(`${studentName} has been excluded at ${counter} grade`);
    }

}
solve([
    'Mimi', '5', '6',
    '5', '6', '5',
    '6', '6', '2',
    '3'
])