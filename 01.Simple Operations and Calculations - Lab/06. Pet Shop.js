function solve(input){
    let dogNum = Number(input.shift());
    let animlasNum = Number(input.shift());
    let foodCosts = (dogNum * 2.50 + animlasNum* 4).toFixed(2);
console.log(`${foodCosts} lv.`)
}

solve([5,4])