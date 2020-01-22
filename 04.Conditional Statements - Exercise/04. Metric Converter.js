function solve(input) {
    let num = Number(input.shift());
    let metricUnitToConvert = input.shift();
    let metricUnit = input.shift();
    if (metricUnitToConvert === 'mm') {
        if (metricUnit === 'cm') {
            console.log((num / 10).toFixed(3));
        } else {
            console.log((num / 1000).toFixed(3));
        }

    } else if (metricUnitToConvert === 'cm') {
        if (metricUnit === 'mm') {
            console.log((num * 10).toFixed(3));
        } else {
            console.log((num / 100).toFixed(3));
        }

    } else {
        if (metricUnit === 'mm') {
            console.log((num * 1000).toFixed(3));
        } else {
            console.log((num * 100).toFixed(3));
        }

    }
}
solve([150, 'm', 'cm'])