function solve(input) {
    let line = input.shift();
    let sumPrime = 0;
    let sumNotPrime = 0;
    while (line !== 'stop') {
        let isPrime = true;
        let num = Number(line);
        if (num < 0) {
            console.log('Number is negative.');
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                sumPrime += num;
            } else {
                sumNotPrime += num;
            }
        }
        line = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNotPrime}`);
}

solve([
    '30',
    '83',
    '33',
    '-1',
    '20',
    'stop'
])