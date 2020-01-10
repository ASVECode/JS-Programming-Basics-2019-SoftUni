function solve(input) {
    let length = Number(input.shift()) * 100;
    let width = Number(input.shift()) * 100;
    let wardrobeSide = Number(input.shift()) * 100;
    let wardrobeArea = wardrobeSide * wardrobeSide;
    let hallArea = length * width;
    let benchArea = hallArea / 10;
    let dancersArea = hallArea - wardrobeArea - benchArea;
    let neededAreaPerDancer = 7040;
    let dancersNum = Math.floor(dancersArea / neededAreaPerDancer)
    console.log(dancersNum);
}
solve(['50', '25', '2'])

