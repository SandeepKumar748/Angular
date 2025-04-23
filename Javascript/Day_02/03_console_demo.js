console.log(`Hello log`)
console.warn(`Hello warn`)
console.error( `Hello error`)


/////// Console.table() demo
let emp = [
    {emp: "emp1", name: "sandeep"},
    {emp: "emp2", name: "sandeep2"},
    {emp: "emp3", name: "sandeep3"}
]

console.table(emp, ["name"])

//////// console.time(), console.time
console.time("Forloop")
let i = 0;
for (let index = 0; index < 100; index++) {
        i += index
}
console.timeEnd("Forloop")