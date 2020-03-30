function solve(input) {
    let n = Number(input.shift());
    let l = Number(input.shift());
    let result = '';
    let simbol1;
    let simbol2;
    let simbol3;
    let simbol4;
    let simbol5;
    for (let s1 = 1; s1 < n; s1++) {
        simbol1 = s1;
        for (let s2 = 1; s2 < n; s2++) {
            simbol2 = s2;
            for (let s3 = 0; s3 < l; s3++) {
                simbol3 = String.fromCharCode(s3 + 97);
                for (let s4 = 0; s4 < l; s4++) {
                    simbol4 = String.fromCharCode(s4 + 97);
                    for (let s5 = 2; s5 <= n; s5++) {
                        simbol5 = s5;
                        if (s5 > s1 && s5 > s2) {
                            result += `${simbol1}${simbol2}${simbol3}${simbol4}${simbol5} `;
                        }
                    }
                }
            }
        }
    }
    console.log(result)
}
solve(['3', '1'])