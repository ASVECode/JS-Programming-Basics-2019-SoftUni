function solve(input) {
    let sum = 0;
    while (true) {
        let line = input.shift();
        let num = Number(line);
        if (line == 'Going home') {
            let finalSteps = +input.shift();
            if ((10000 - sum - finalSteps) > 0) {
                console.log(`${Number(10000 - sum - finalSteps)} more steps to reach goal.`);
                break;
            } else {
                console.log('Goal reached! Good job!');
                break;
            }
        }
        if (sum >= 10000) {
            console.log('Goal reached! Good job!');
            break;
        }

        if (line == undefined) {
            break;
        }
        sum += num;

    }
}
solve(['1500',
    '3000',
    '250',
    '1548',
    '2000',
    'Going home',
    '2000'])