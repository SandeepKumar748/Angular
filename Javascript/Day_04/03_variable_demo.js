let a = 10;
console.log(b)
function abc(){
    console.log(b)
    if(true){
        var b = 30;
    }
    console.log(b)
}
let b = 20;
abc()

// anonymous means global code is getting executed
// for global execution context memory creation is already done ?
// 1. memory creation phase
// 2. code execution phase