function solve(input) {
    let num = Number(input.shift());
    num = Math.floor(num * 100);
    let counter = 0;
    while (num > 0) {
        if (num - 200 >= 0) {
            num = num - 200;
            counter++;
        } else if (num - 100 >= 0) {
            num = num - 100;
            counter++;
        } else if (num - 50 >= 0) {
            num = num - 50;
            counter++;
        } else if (num - 20 >= 0) {
            num = num - 20;
            counter++;
        } else if (num - 10 >= 0) {
            num = num - 10;
            counter++;
        } else if (num - 5 >= 0) {
            num = num - 5;
            counter++;
        } else if (num - 2 >= 0) {
            num = num - 2;
            counter++;
        }
        else if (num - 1 >= 0) {
            num = num - 1;
            counter++;
        }
    }

    console.log(counter);
}
solve(['0.56'])