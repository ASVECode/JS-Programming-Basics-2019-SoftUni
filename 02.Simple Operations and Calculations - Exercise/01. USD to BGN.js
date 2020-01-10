function solve (input){
    let dollars = Number(input.shift());
    let leva  = dollars * 1.79549
    console.log(leva.toFixed(2))
}
solve([20])