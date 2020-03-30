function solve(input) {
    let type = input.shift();//тап на първенството – текст - “Quarter final ”, “Semi final” или “Final”
    let tickets = input.shift(); //Вид на билета – текст - “Standard”, “Premium” или “VIP”
    let numTickets = Number(input.shift());//3. Брой билети – цяло число в интервала [1 … 30]
    let photo = input.shift(); //4. Снимка с трофея – символ – 'Y' (да) или 'N' (не)
    let price = 0;

    switch (type) {
        case 'Quarter final':
            if (tickets == 'Standard') {
                price = 55.50;
                break;
            } else if (tickets == 'Premium') {
                price = 105.20;
                break;
            } else if (tickets == 'VIP') {
                price = 118.90;
                break;
            }
        case 'Semi final':
            if (tickets == 'Standard') {
                price = 75.88;
                break;
            } else if (tickets == 'Premium') {
                price = 125.22;
                break;
            } else if (tickets == 'VIP') {
                price = 300.40;
                break;
            }
        case 'Final':
            if (tickets == 'Standard') {
                price = 110.10;
                break;
            } else if (tickets == 'Premium') {
                price = 160.66;
                break;
            } else if (tickets == 'VIP') {
                price = 400;
                break;
            }
    }
    price *= numTickets;
    if (price > 4000) {
        price = price - price * 0.25;
        console.log(price.toFixed(2));
    } else if (price > 2500 && price < 4000) {
        price = price - price * 0.10;
        if (photo == 'Y') {
            price += numTickets * 40;
        }
        console.log(price.toFixed(2));
    } else {
        if (photo == 'Y') {
            price += numTickets * 40;
        }
        console.log(price.toFixed(2));
    }

}
solve(['Quarter final',
    'Standard',
    '11',
    'N'])