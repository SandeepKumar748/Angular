// 1. Print the occurence of each character in a string
//    input: 'entertainment'
//    output: { e:3 , n:2 , t: 3 ....}

let input = 'entertainment'

let result = {}

input.split('').forEach(char => {
    if(result[char])
        result[char]++
    else
        result[char] = 1
})

console.log(Object.values(result));
