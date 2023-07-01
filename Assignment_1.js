/*
	Assignment : 
	Add a new employee
	change the employee name for a perticular employee
	delete a perticular emp form a given empId
	gievn a empId, get the entire details 
*/

/* Add a new employee */

var employee= require("./employee");

const addemp = (data) => {
	let result={...employee,data}
	employee.push(data)
	return result;
};

const updateemp(data)=>{
	oldemp = employee.find{(e) => e.empId == data.empId);
	oldemp.name=data.name
	newdata={...employee,oldemp}
	return employee
}

const deleteemp=(data)=>{
	result = employee.filter{(e) => e.empId != data.empId);
	return result
}

const gateemp=(data)=>{
	result = employee.find{(e) => e.empId == data.empId);
	return result
}

console.log("add",addemp({ empId:11, name: "Nick", project: "Project K"}));
console.log("update",updateemp({ empId: 11, name: "Ramesh", project: "Project K"}));
console.log("de", deleteemp({ empId: 5 }));
console.log("get", getemp({ empId: 1 }));
