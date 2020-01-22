function solve(input) {

    let city = input.shift();
    let sales = Number(input.shift());
    let commissions = 0;

    if (city == 'Sofia') {
        if (0 <= sales && sales <= 500) {
            commissions = (sales * 0.05).toFixed(2);
        } else if (500 <= sales && sales <= 1000) {
            commissions = (sales * 0.07).toFixed(2);
        } else if (1000 <= sales && sales <= 10000) {
            commissions = (sales * 0.08).toFixed(2);
        } else if (sales > 10000) {
            commissions = (sales * 0.12).toFixed(2);
        } else {
            commissions = 'error';
        }

    } else if (city == 'Varna') {
        if (0 <= sales && sales <= 500) {
            commissions = (sales * 0.045).toFixed(2);
        } else if (500 <= sales && sales <= 1000) {
            commissions = (sales * 0.075).toFixed(2);
        } else if (1000 <= sales && sales <= 10000) {
            commissions = (sales * 0.10).toFixed(2);
        } else if (sales > 10000) {
            commissions = (sales * 0.13).toFixed(2);
        } else {
            commissions = 'error';
        }

    } else if (city == 'Plovdiv') {
        if (0 <= sales && sales <= 500) {
            commissions = (sales * 0.055).toFixed(2);
        } else if (500 <= sales && sales <= 1000) {
            commissions = (sales * 0.08).toFixed(2);
        } else if (1000 <= sales && sales <= 10000) {
            commissions = (sales * 0.12).toFixed(2);
        } else if (sales > 10000) {
            commissions = (sales * 0.145).toFixed(2);
        } else {
            commissions = 'error';
        }
    } else {
        commissions = 'error'
    }
    console.log(commissions);
}
solve(['Sofia', 10005]);