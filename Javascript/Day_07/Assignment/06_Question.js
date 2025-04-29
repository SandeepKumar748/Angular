
// 6. Ask user to enter a sequence of parantheses and validate 
//    input: '([{ }])'
//    output : true

let inp = prompt('Enter')
let input = '([{}([]{})])'.split('') //  ['(', '[']
let balanceArray = []  //  [')', ']', '}']
let isBal = true


while(input.length > 0){
    let char = input.pop() // 
    if(!isLeftBracket(char)){
        balanceArray.push(char)   //  [')']
    }else{
        if(isBalancedPair(char, balanceArray.pop())) continue
        isBal = false
        break
    }
}

if(isBal) console.log(`Array is balanced`);
else console.log(`Array is not balanced`)


function isLeftBracket(left){
    if(left == '(' || left == '[' || left == '{'){
        return true
    }
    return false
}

function isBalancedPair(left, right){
    if((left == '(' && right != ')') || (left == '[' && right != ']') || (left == '{' && right != '}')){
        return false
    }
    return true
}
