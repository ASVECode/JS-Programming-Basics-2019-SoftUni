function solve(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let height = Number(input.shift());
    let percent = Number(input.shift()) * 0.01;
    let volumeTank = length * width * height;
    let littersNum = volumeTank * 0.001;
    //let result = littersNum * (1 - percent);
    let result = littersNum - littersNum*0.17
    console.log(result.toFixed(3));
}
solve([85, 75, 47, 17])