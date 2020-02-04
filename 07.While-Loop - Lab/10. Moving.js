function solve(input) {
    let width = +input.shift();
    let length = +input.shift();
    let height = +input.shift();
    let space = Number(width * height * length);
    let boxes;

    while (space > 0) {
       let line = Number(input.shift());
//console.log(line)
        if(line == 'Done'){
            console.log(`${space} Cubic meters left.`)
            break;
        }

        boxes = Number(line);
        //console.log(boxes)

        if ((space - boxes) > 0) {
            space -= boxes;
        } else {
            let leftover = Math.abs(space - boxes);
            console.log(`No more free space! You need ${leftover} Cubic meters more.`);
            break;
        }
    }
}

solve([
    '10', '10', '2',
    '20', '20', '20',
    '20', '122',""
])