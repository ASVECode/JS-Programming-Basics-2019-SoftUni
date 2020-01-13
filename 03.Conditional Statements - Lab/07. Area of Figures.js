function solve(input) {
    let figure = input.shift();
    if (figure == 'square') {
        let a = Number(input.shift());
        console.log((a * a).toFixed(3));
    } else if (figure == 'rectangle') {
        let a = Number(input.shift());
        let b = Number(input.shift());
        console.log((a * b).toFixed(3));
    } else if (figure == 'circle') {
        let r = Number(input.shift());
        console.log((r * r * Math.PI).toFixed(3));
    } else {
        let a = Number(input.shift());
        let h = Number(input.shift());
        console.log(((a * h) / 2).toFixed(3));
    }
}
solve(['triangle',
    4.5,20])