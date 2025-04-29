// 4. Print the Abbreviation for a string
//    input: 'Rabindra Nath Tagore'
//    output: 'R. N. tagore'

let input = 'Rabindra Nath Tagore'
let result = ''

input.split(' ').forEach((char, index) => {
    if(index != input.split(' ').length-1) result += char.charAt(0).toUpperCase().concat('. ')
    else result+= char.toLowerCase()
})

console.log((result));