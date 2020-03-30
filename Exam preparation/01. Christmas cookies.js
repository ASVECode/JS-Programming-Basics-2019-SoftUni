function solve(input) {
    let priceBaklava = Number(input.shift());
    let priceMuffin = Number(input.shift());
    let kgShtolen = Number(input.shift());
    let kgCandies = Number(input.shift());
    let kgBiscuits = Number(input.shift());

    let priceShtolen = Number((kgShtolen * (priceBaklava + priceBaklava * 0.6)).toFixed(2));
    let priceBiscuits = Number((kgBiscuits * 7.5).toFixed(2));
    let priceCandies = Number((kgCandies * (priceMuffin + priceMuffin * 0.8)).toFixed(2));
    let result = priceShtolen + priceCandies + priceBiscuits;
    console.log(result);


}
solve(['5.55',
    '3.57',
    '4.3',
    '3.6',
    '7'])