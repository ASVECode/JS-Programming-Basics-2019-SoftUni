function solve(input) {
    let maxSum = 0;
    let winnerName = '';
    while (true) {
        let sumName = 0;
        let name = input.shift();
        if (name == 'STOP') {
            break;
        }

        for (let i = 0; i < name.length; i++) {
            sumName += name[i].charCodeAt(0);
        }

        if (sumName > maxSum) {
            maxSum = sumName;
            winnerName = name;
        }

    }
    console.log(`Winner is ${winnerName} - ${maxSum}!`);
}
solve(['Ivo',
    'Niki',
    'Valio',
    'Konstantin',
    'n',
    'STOP']);