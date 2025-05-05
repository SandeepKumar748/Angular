let user = {
    name : 'Sachin',
    'last name' : 'tendulkar',
    age : 35,
    add : 'mumbai',
    
    fun : function(){
        console.log('having fun');
    }
}

console.log(user.name); // cannot be used when object key contains a space // user.last name
// console.log(user.last name); gives error

console.log(user['age']);

let x = 'add'
console.log(user.x); // undefined
console.log(user[x]);  // mumbai

let keys = Object.keys(user)
console.log('Keys   ', keys);

console.log(keys, keys.length);

console.log(Object.values(user));
