function solve(input) {
    let budget = Number(input.shift());
    let season = input.shift();
    let numOfFishermen = Number(input.shift());
    let holidayAccommodation = '';
    let holidayDestination = '';
    let holidayPrice = 0;


    switch (season) {
        case 'summer':
            if (budget <= 100) {
                holidayPrice = budget * 0.30;
                holidayAccommodation = 'Camp';
                holidayDestination = 'Bulgaria';
            } else if (budget <= 1000) {
                holidayPrice = budget * 0.40;
                holidayAccommodation = 'Camp';
                holidayDestination = 'Balkans';
            } else {
                holidayPrice = budget * 0.90;
                holidayAccommodation = 'Hotel';
                holidayDestination = 'Europe';
            }
            break;
        case 'winter':
            if (budget <= 100) {
                holidayPrice = budget * 0.70;
                holidayAccommodation = 'Hotel';
                holidayDestination = 'Bulgaria';
            } else if (budget <= 1000) {
                holidayPrice = budget * 0.80;
                holidayAccommodation = 'Hotel';
                holidayDestination = 'Balkans';
            } else {
                holidayPrice = budget * 0.90;
                holidayAccommodation = 'Hotel';
                holidayDestination = 'Europe';
            }
            break;
    }
    console.log(`Somewhere in ${holidayDestination}\n${holidayAccommodation} - ${holidayPrice.toFixed(2)}`);
}
solve([1500, 'summer'])