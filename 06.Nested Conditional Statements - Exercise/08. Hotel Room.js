function solve(input) {
    let month = input.shift();
    let numberOfNights = Number(input.shift());
    let priceApartment = 0;
    let priceStudio = 0;

    switch (month) {
        case 'May':
        case 'October':
            if (numberOfNights > 7 && numberOfNights < 14) {
                priceStudio = numberOfNights * 50 * 0.95;
                priceApartment = numberOfNights * 65;
            } else if (numberOfNights > 14) {
                priceStudio = numberOfNights * 50 * 0.7;
                priceApartment = numberOfNights * 65 * 0.9;
            } else {
                priceStudio = numberOfNights * 50;
                priceApartment = numberOfNights * 65;
            }
            break;

        case 'June':
        case 'September':
            if (numberOfNights > 14) {
                priceStudio = numberOfNights * 75.20 * 0.8;
                priceApartment = numberOfNights * 68.70 * 0.9;
            } else {
                priceStudio = numberOfNights * 75.20;
                priceApartment = numberOfNights * 68.70;
            }
            break;

        default:
            if (numberOfNights > 14) {
                priceStudio = numberOfNights * 76;
                priceApartment = numberOfNights * 77 * 0.9;
            } else {
                priceStudio = numberOfNights * 76;
                priceApartment = numberOfNights * 77;
            }
            break;
    }

    console.log(`Apartment: ${priceApartment.toFixed(2)} lv.\nStudio: ${priceStudio.toFixed(2)} lv.`);
}
solve(['August', 20])