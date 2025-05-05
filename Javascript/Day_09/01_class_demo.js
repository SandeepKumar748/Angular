// ES - 5
function Student1(roll, name, add, course){ // Constructor function
    this.roll = roll;
    this.name = name;
    this.add = add;
    this.course = course;
    console.log(`Constructor invoked`);
    
}

// If it is a constructor function we invoke it using new keyword

let std1 = new Student1(1,2,3,4)
console.log(std1.add);

console.log(std1); // Student object gets printed


// in ES 6 and beyond, we use class keyword
class Student {
    constructor(roll, name, add, course){ // Constructor function
        this.roll = roll;
        this.name = name;
        this.add = add;
        this.course = course;
    }
}

let std = new Student(101, 'Arul', 'Boston', 'angular')
console.log(std);
