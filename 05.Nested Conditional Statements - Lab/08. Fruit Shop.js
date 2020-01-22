function solve(input) {
    let fruit = input.shift();
    let day = input.shift();
    let amount = Number(input.shift());
    let price = 0;

    if (day == 'Monday' || day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday') {
        if (fruit == 'banana') {
            price = (amount * 2.50).toFixed(2);
        } else if (fruit == 'apple') {
            price = (amount * 1.20).toFixed(2);
        } else if (fruit == 'orange') {
            price = (amount * 0.85).toFixed(2);
        } else if (fruit == 'grapefruit') {
            price = (amount * 1.45).toFixed(2);
        } else if (fruit == 'kiwi') {
            price = (amount * 2.70).toFixed(2);
        } else if (fruit == 'pineapple') {
            price = (amount * 5.50).toFixed(2);
        } else if (fruit == 'grapes') {
            price = (amount * 3.85).toFixed(2);
        } else {
            price = 'error';
        }

    } else if (day == 'Saturday' || day == 'Sunday') {
        if (fruit == 'banana') {
            price = (amount * 2.70).toFixed(2);
        } else if (fruit == 'apple') {
            price = (amount * 1.25).toFixed(2);
        } else if (fruit == 'orange') {
            price = (amount * 0.90).toFixed(2);
        } else if (fruit == 'grapefruit') {
            price = (amount * 1.60).toFixed(2);
        } else if (fruit == 'kiwi') {
            price = (amount * 3.00).toFixed(2);
        } else if (fruit == 'pineapple') {
            price = (amount * 5.60).toFixed(2);
        } else if (fruit == 'grapes') {
            price = (amount * 4.20).toFixed(2);
        } else {
            price = 'error';
        }

    } else {
        price = 'error';
    }

    console.log(price)

}
solve(['orange', 'Sunday', 3])
