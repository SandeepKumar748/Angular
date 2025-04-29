// 3. Swap The case for Each Character in a string 
//    input: 'Hello World'
//    output: 'hELLO wORLD'

let input = 'Hello World'
let result = ''

input.split('').forEach(char => {
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) result += char.toLowerCase()
    else if(char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) result += char.toUpperCase()
    else result+= char
})

console.log((result));
