    // 2. Print the character which is repeated max no of times
    //    input: 'hello world'
    //    output : 'L'


    let input = 'entertainment'
    let result = {}
    let maxCount = 0
    let maxRepChar = ''
    
    input.split('').forEach(char => {
        if(result[char])
            result[char]++
        else
            result[char] = 1

        if(result[char] > maxCount) {
            maxCount = result[char]
            maxRepChar = char
        }
    })

    Object.keys(result).forEach(key => {
        if(result[key] == maxCount) console.log(key.toUpperCase());
    })