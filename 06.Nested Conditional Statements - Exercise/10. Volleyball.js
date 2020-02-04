function solve(input) {
    let year = input.shift();
    let nationalHolidays = Number(input.shift());
    let homeWeekends = Number(input.shift());

    let games = (48 - homeWeekends) * 0.75 + homeWeekends + nationalHolidays * 0.6666666666666667;

    switch (year) {
        case 'leap':
            console.log(Math.floor(games * 1.15));
            break;
        case 'normal':
            console.log(Math.floor(games));
            break;
    }

}
solve(['normal', 3, 2])
solve(['leap', 2, 3])
solve(['normal', 11, 6])
solve(['leap', 0, 1])
solve(['normal', 6, 13])
