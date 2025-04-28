let a:number = 10
let b:number = 20

// console.log(`a + b = ${a + b}`)

function abc(a:number, b:number, c?:number){
    if(c){
        return a + b + c ;
    }

    return a + b;
}

console.log(abc(1,2,3))