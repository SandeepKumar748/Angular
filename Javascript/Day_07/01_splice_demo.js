// splice (index, how many items to delete, Items to insert)
// 1. only delete     2. only insert     3. Both delete and insert

let arr = [10, 20, 30, 40, 50]
console.log(arr.splice(2, 1)); // only delete 30

console.log(arr.splice(2, 0, 30)); // Only insert 30 at index 2

console.log(arr.splice(1,2,25,27));

