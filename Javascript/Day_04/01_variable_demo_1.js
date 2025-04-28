
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(`a value is ${a}`);
    console.log(`b value is ${b}`);
    console.log(`c value is ${c}`);

    console.log(`--------------------------------------`)
    
    a = 15
    b = 10
    // c = 31 // const cannot be changed

    console.log(`a value is ${a}`);
    console.log(`b value is ${b}`);
    console.log(`c value is ${c}`);

    // modifying/add a new value to a const array

    const arr = [10,20] // arr holds the address of an object, so modifying/adding a value
                                //  to the same array doesn't change the address pointing to arr
    arr.push(20) // adding / modifying is possible for a const array

    