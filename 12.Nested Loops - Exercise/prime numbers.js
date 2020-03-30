for (let num = 1; num <= 12; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime == true) {
        if(num == 1){
            continue;
        }
        console.log(num)
    }
}




