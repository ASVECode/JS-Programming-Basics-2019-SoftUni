function solve(input) {

    let incomes = Number(input.shift());
    let averageGrade = Number(input.shift());
    let minSalary = Number(input.shift());

    let socialScholarship = minSalary * 0.35;
    let gradeScholarship = averageGrade * 25;

    if (incomes > minSalary) {
        if (averageGrade >= 5.50) {
            console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
        } else {
            console.log('You cannot get a scholarship!');
        }

    } else {
        if (averageGrade >= 5.50) {
            if (socialScholarship > gradeScholarship) {
                console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
            } else {
                console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
            }
        } else if (averageGrade > 4.50 && averageGrade < 5.50) {
            console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
        } else {
            console.log('You cannot get a scholarship!');
        }

    }

}
solve(['480.00', '4.60', '450.00'])

//another solution

// function solve(input) {

//     let incomes = Number(input.shift());
//     let averageGrade = Number(input.shift());
//     let minSalary = Number(input.shift());

//     let socialScholarship = 0;
//     let gradeScholarship = 0;

//     if (incomes < minSalary) {
//         if (averageGrade > 4.50) {
//             socialScholarship = minSalary * 0.35;
//         }
//     }

//     if (averageGrade >= 5.50) {
//         gradeScholarship = averageGrade * 25;
//     }

//     if (socialScholarship > gradeScholarship) {
//         console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
//     } else if (socialScholarship < gradeScholarship) {
//         console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
//     } else {
//         console.log('You cannot get a scholarship!');
//     }
// }
// solve(['480.00', '4.60', '450.00'])