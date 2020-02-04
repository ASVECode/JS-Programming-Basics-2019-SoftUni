function solve(input) {
    let bookAni = input.shift();
    let numBooks = Number(input.shift());
    let counter = 1;

    while (true) {
        let book = input.shift();
        counter++;


        if (book == bookAni) {
            counter--;
            console.log(`You checked ${counter} books and found it.`);
            break;
        }

        if (counter == numBooks) {
            console.log('The book you search is not here!');
            console.log(`You checked ${numBooks} books.`);
            break;
        }

    }
}
solve(['Bourne',
    32,
    'True Story',
    'Forever',
    'More Space',
    'The Girl',
    'Spaceship',
    'Strongest',
    'Profit',
    'Tripple',
    'Stella',
    'The Matrix',
    'Bourne'])