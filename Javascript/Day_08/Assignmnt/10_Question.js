// 10. WAP to print the occurance of each elements 
//     input = [10,20,30,40,50,10,30,50]
// 	output = {10:2, 20:1, 30:2 , 40:1, 50:2}

let input = [10,20,30,40,50,10,30,50]

console.log(input.reduce((freqTrac, curr) => {
    if(freqTrac[curr]) freqTrac[curr]++
    else freqTrac[curr] = 1
    return freqTrac
}, {}));

