// 5. Shift the characters by the next character, the output should have the next char of input
//    input:  'abcxyz'
//    output: 'bcdyza'

let input = 'ZbCxYz'
let output = ''

input.split('').forEach(char => output += getNextCharacter(char))
console.log(output);


function getNextCharacter(char){
     if(!isUpperCase(char)){
        return String.fromCharCode(97 + (char.charCodeAt(0) - 96) % 26)
     }
     return String.fromCharCode(65 + (char.charCodeAt(0) - 64) % 26)
}

function isUpperCase(char){
    if(char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) return true
    return false
}