function solve(input) {
    let numJury = input.shift();
    let presentation = input.shift();
    let presentationCount = 0;
    let sum = 0;
    let totalSum = 0;
    while (presentation != "Finish") {
        let jury = Number(numJury)
        while (jury > 0) {
            let grade = Number(input.shift());
            sum += grade;
            jury--;
        }
        console.log(`${presentation} - ${(sum / Number(numJury)).toFixed(2)}.`);
        totalSum += sum / Number(numJury);
        sum = 0;
        presentation = input.shift();
        presentationCount++;

    }
    console.log(`Student's final assessment is ${(totalSum / presentationCount).toFixed(2)}.`)
}
solve(['2',
    'Objects and Classes',
    '5.77',
    '4.23',
    'Dictionaries',
    '4.62',
    '5.02',
    'RegEx',
    '2.88',
    '3.42',
    'Finish'])