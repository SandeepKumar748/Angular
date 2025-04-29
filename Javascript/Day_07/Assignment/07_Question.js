// 7. Ask user to enter a 3 letter word, print all the permutations using those 3 letters.
//     input: 'ABC'
//     output: ABC , ACB , BCA, BAC ...
    let input = 'ABC'
    let result = ''
    let output = {}
    for(let i = 0; i < input.length; i++){
        for(let j = 0; j < input.length; j++){
            for(let k= 0; k < input.length; k++){
                if(i != j && j != k && k != i){
                    result += input.charAt(i) + input.charAt(j) + input.charAt(k)
                    if(!output[result]){
                        output[result] = 1
                    }
                }
                result = ''
            }
        }
    }
    console.log(Object.keys(output));