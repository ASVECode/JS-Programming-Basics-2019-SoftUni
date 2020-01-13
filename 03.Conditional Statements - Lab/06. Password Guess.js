function solve(input) {
    let word = input.shift();
    if (word == 's3cr3t!P@ssw0rd') {
        console.log('Welcome')
    } else {
        console.log('Wrong password!')
    }
}
solve(['qwerty'])
