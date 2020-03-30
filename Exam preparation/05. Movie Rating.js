function solve(input) {
    let numberMovies = input.shift();
    let numMovies = Number(numberMovies)
    let movieTitle = input.shift();
    let movieRaiting = Number(input.shift());
    let sumRaitings = 0;
    let highestRaitingMovie = '';
    let lowestRaitingMovie = '';
    let highestRaiting = Number.MIN_SAFE_INTEGER;
    let lowestRaiting = Number.MAX_SAFE_INTEGER;

    while (numMovies > 0) {
        sumRaitings += movieRaiting;
        if (movieRaiting >= highestRaiting) {
            highestRaiting = movieRaiting;
            highestRaitingMovie = movieTitle;
        }
        if (movieRaiting <= lowestRaiting) {
            lowestRaiting = movieRaiting;
            lowestRaitingMovie = movieTitle;
        }
        numMovies--;
        movieTitle = input.shift();
        movieRaiting = Number(input.shift());
    }
    console.log(`${highestRaitingMovie} is with highest rating: ${highestRaiting}`);
    console.log(`${lowestRaitingMovie} is with lowest rating: ${lowestRaiting}`);
    console.log(`Average rating: ${(sumRaitings / Number(numberMovies)).toFixed(1)}`);
}
solve(['3',
    'Interstellar',
    '8.5',
    'Dangal',
    '8.3',
    'Green Book',
    '8.2'])