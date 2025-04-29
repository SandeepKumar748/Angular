// 7. add Dept info for each employee
    let employees = [{eId: 101, name: "sanjay", sal: 5000, gender: "male" },
				{ eId: 104, name: "reena", sal: 8000, gender: "female" }]
	let departments = [{ eId: 101, dept: "sales" },
				{ eId: 104, dept: "marketing" }]
    
    employees = employees.map(emp => {
        let department = departments.filter( dept => dept.eId == emp.eId)
        emp['dept'] = department[0].dept
        return emp
    })

    console.log(employees);
    