function solve(input) {
    let whiskeyPrice = Number(input.shift());
    let beerLiters = Number(input.shift());
    let wineLiters = Number(input.shift());
    let rakiaLiters = Number(input.shift());
    let whiskeyLiters = Number(input.shift());
    let rakiaPrice = whiskeyPrice / 2;
    let winePrice = rakiaPrice * (1 - 0.4);
    let beerprice = rakiaPrice * (1 - 0.8);
    let sum = whiskeyLiters * whiskeyPrice + rakiaLiters * rakiaPrice + wineLiters * winePrice + beerLiters * beerprice;
    console.log(sum.toFixed(2));
}
solve([50, 10, 3.5, 6.5, 1]);