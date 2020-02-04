function solve(input) {
    let sum = 0;
    
    while(true){
        let line = input.shift();

        if(line == 'Stop'){
            break;
        }

        sum += Number(line);
    }

    console.log(sum);
}
solve(['10', '20', '30', '45', 'Stop'])