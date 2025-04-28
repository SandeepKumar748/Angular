let log = console.log
// function declaration : funciton with a name
// Hoisted
function add(a, b){
    log(`addition of ${a} and ${b} is ${a + b}`)    
}


// funciton expression / anonymous: funciton with no name 
// Not hoisted
log(sub);

var sub = function(a, b){
    log(`Subtraction of ${a} and ${b} is ${a - b}`)
}

// IIFE : Immediately invoked function expression
// Used to handle var scope earlier before ES6
// JavaScript sometimes automatically inserts semicolons (Automatic Semicolon Insertion - ASI).
// But not always perfectly.
// Especially when an IIFE immediately follows another expression, you must manually insert a semicolon.
// Otherwise, JavaScript will think you are trying to call the result of the previous line (which is not a function).
;(function(){
    log(`this is IIFE function`);
})();






// Arrow function benefitis
// --------------------------------------
var div = (a , b) => {
    log(`This is arrow function`)
}