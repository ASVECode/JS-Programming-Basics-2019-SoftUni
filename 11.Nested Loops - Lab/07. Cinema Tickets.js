function solve(input) {
    let totalCounter = 0;
    let studentsCount = 0;
    let kidsCount = 0;
    let standardCount = 0;
    while (true) {
        let freeSeats = Number(input.shift());
        let counter = 0;
        if (movie == 'Finish') {
            break;
        }
        while (true) {
            let type = input.shift();
            if (type == 'End') {
                break;
            }

            if (counter == freeSeats) {
                break;
            }
            counter++;

            if (type == 'student') {
                studentsCount++;
            } else if (type == 'kid') {
                kidsCount++;
            } else if (type == 'standard') {
                standardCount++;
            }

        }
        totalCounter += counter;
        console.log(`${movie} - ${(Number((counter / freeSeats) * 100)).toFixed(2)}% full.`);

    }
    console.log(`Total tickets: ${totalCounter}`)
    console.log(`${((studentsCount / totalCounter) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardCount / totalCounter) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidsCount / totalCounter) * 100).toFixed(2)}% kids tickets.`);
}
solve([
'The Matrix',
'20',
'student',
'standard',
'kid',
'kid',
'student',
'student',
'standard',
'student',
'End',
'The Green Mile',
'17',
'student',
'standard',
'standard',
'student',
'standard',
'student',
'End',
'Amadeus',
'3',
'standard',
'standard',
'standard',
'Finish'

])