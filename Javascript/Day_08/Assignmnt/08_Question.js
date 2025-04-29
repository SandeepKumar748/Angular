    // 8. declare array of employees & groupBy employees-name
    // sample output: {
	// 	'sanjay' : [{},{}],
	// 	'alok' : [{}]
	// }

    let employees = [
        { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
        { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
        { eId: 103, name: 'sanjay', sal: 7000, gender: 'male' },
        { eId: 102, name: 'deepak', sal: 9000, gender: 'female' },
        { eId: 105, name: 'deepak', sal: 8000, gender: 'male' }
      ];

    let output = {

    }

    // employees.sort((a, b) => {
    //     if(a.name > b.name) return 1;
    //     else if(a.name < b.name) return -1
    //     return 0
    // }).forEach(emp => {
        
    // })

    employees.forEach(emp => {
            if(!output[emp.name]) {
                output[emp.name] = employees.filter(emp1 => emp1.name == emp.name)
            }
        })
    console.log(output);
    