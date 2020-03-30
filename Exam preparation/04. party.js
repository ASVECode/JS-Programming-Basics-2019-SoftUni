function solve(input) {
    let moneySinger = Number(input.shift());
    let price = 0;
    let totalGuests = 0;
    let line = input.shift();
    while (line != 'The restaurant is full') {
        //let line = input.shift();
        let numGuests = Number(line);
        if (numGuests < 5) {
            price += numGuests * 100;
            totalGuests += numGuests
        } else {
            price += numGuests * 70;
            totalGuests += numGuests
        }
        line = input.shift();
        numGuests = Number(line);
    }
    if (price >= moneySinger) {
        console.log(`You have ${totalGuests} guests and ${price - moneySinger} leva left.`);
    } else {
        console.log(`You have ${totalGuests} guests and ${price} leva income, but no singer.`);
    }
}
solve(['1800',
    '4',
    '4',
    '4',
    '4',
    '6',
    '6',
    'The restaurant is full'])