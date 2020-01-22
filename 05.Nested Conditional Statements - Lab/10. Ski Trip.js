function solve(input) {

    let days = Number(input.shift()) - 1;
    let accommodationType = input.shift();
    let grade = input.shift();
    let discount = 1;
    let accommodationPrice = 0;

    if (accommodationType == 'room for one person') {
        accommodationPrice = days * 18;
    } else if (accommodationType == 'apartment') {
        if (days < 10) {
            accommodationPrice = days * 25 - (days * 25) * 0.30;
        } else if (days >= 10 && days <= 15) {
            accommodationPrice = days * 25 - (days * 25) * 0.35;
        } else {
            accommodationPrice = days * 25 - (days * 25) * 0.50;
        }
    } else {
        if (days < 10) {
            accommodationPrice = days * 35 - (days * 35) * 0.10;
        } else if (days >= 10 && days <= 15) {
            accommodationPrice = days * 35 - (days * 35) * 0.15;
            dicount = 35 * 0.15;
        } else {
            accommodationPrice = days * 35 - (days * 35) * 0.20;
        }
    }

    if (grade == 'positive') {
        accommodationPrice = accommodationPrice + accommodationPrice * 0.25;
    } else {
        accommodationPrice = accommodationPrice - accommodationPrice * 0.10;
    }

    console.log(accommodationPrice.toFixed(2));
}

solve([2,
    'apartment',
    'positive'])