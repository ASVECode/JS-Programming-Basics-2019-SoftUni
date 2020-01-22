function solve(input) {

    let recordInSec = Number(input.shift());
    let distanceInMeters = Number(input.shift());
    let timeInSecPerMeter = Number(input.shift());
    let delay = Math.floor(distanceInMeters / 15) * 12.5;
    let swimmerTime = distanceInMeters * timeInSecPerMeter + delay;
    if (swimmerTime < recordInSec) {
        console.log(`Yes, he succeeded! The new world record is ${swimmerTime.toFixed(2)} seconds.`)
    } else {
        console.log(`No, he failed! He was ${(swimmerTime - recordInSec).toFixed(2)} seconds slower.`)
    }

}
solve(['55555.67', '3017', '5.03'])