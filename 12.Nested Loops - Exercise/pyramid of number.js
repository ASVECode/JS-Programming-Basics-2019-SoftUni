let n = 5;
let result = '';
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        result += (i + 1) + ' ';
       // console.log(result);
    }
    console.log(result);
    result = '';
};