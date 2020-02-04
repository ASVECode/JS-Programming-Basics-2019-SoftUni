function solve(input) {
    let num = Number(input.shift());

    while (num < 1 || num > 100) {
        console.log(`Invalid number!`);
        num = Number(input.shift());
    }

    console.log(`The number is: ${num}`);

}
solve([-6,-5])