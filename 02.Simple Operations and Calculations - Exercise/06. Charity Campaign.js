function solve(input) {
    let campaignDays = Number(input.shift());
    let confectioner = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let pancakes = Number(input.shift());
    let moneyCollected = campaignDays * (confectioner * (cakes * 45 + waffles * 5.8 + pancakes * 3.2))
    let result = (moneyCollected - moneyCollected / 8).toFixed(2);
    console.log(result);
}
solve([20,8,14,30,16])