function solve(input) {
    let badGradesLimit = Number(input.shift());
    let badGradesCount = 0;
    let numberOfProblems = 0;
    let sumGrades = 0;
    let problem;

    while (true) {
        let line = input.shift();
        if (line == 'Enough') {
            let avgScore = sumGrades / numberOfProblems;
            console.log(`Average score: ${avgScore.toFixed(2)}`);
            console.log(`Number of problems: ${numberOfProblems}`);
            console.log(`Last problem: ${problem}`);
            break;
        }

        problem = line;
        let grade = Number(input.shift());

        if (grade <= 4) {
            badGradesCount++;
        }

        if (badGradesCount == badGradesLimit) {
            console.log(`You need a break, ${badGradesLimit} poor grades.`)
            break;
        }

        sumGrades += grade;
        numberOfProblems++;
    }

}


solve([3,
    'Money',
    6,
    'Story',
    4,
    'Spring Time',
    5,
    'Bus',
    6,
    'Enough'])