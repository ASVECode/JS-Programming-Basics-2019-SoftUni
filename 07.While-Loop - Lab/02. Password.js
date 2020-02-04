function solve(input) {
    let username = input.shift();
    let pass = input.shift();
    let tryPass = input.shift();

    while (tryPass != pass) {
        tryPass = input.shift();
    }

    console.log(`Welcome ${username}!`);
}
solve(['Nakov', 1234, 1235, 1597, 1234])