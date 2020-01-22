function solve(input) {
    let typeOfTicket = input.shift();
    let r = Number(input.shift());
    let c = Number(input.shift());
    let price = 0;

    if (typeOfTicket == 'Premiere') {
        price = r * c * 12;
    } else if (typeOfTicket == 'Normal') {
        price = r * c * 7.5;
    } else {
        price = r * c * 5;
    }
    console.log(price.toFixed(2) + ' leva');
}
solve(['Premiere', 10, 12])