function solve(input) {
    let n = Number(input.shift());
    let salary = Number(input.shift());
    let facebookTax = 150;
    let instagramTax = 100;
    let redditTax = 50;

    for (let i = 0; i < n; i++) {
        let taxName = input.shift();
        switch (taxName) {
            case 'Facebook':
                salary -= facebookTax;
                break;
            case 'Instagram':
                salary -= instagramTax;
                break;
            case 'Reddit':
                salary -= redditTax;
                break;
            default:
                salary -= 0;
                break;
        }

    }
    if (salary <= 0) {
        console.log(`You have lost your salary.`);
    } else {
        console.log(salary);
    }
}
solve(['3',
    '500',
    'Facebook',
    'Stackoverflow.com',
    'softuni.bg'])