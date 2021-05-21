const text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe", "age":"56" },' +
'{ "firstName":"Anna" , "lastName":"Smith", "age":"21" },' +
'{ "firstName":"Peter" , "lastName":"Jones", "age":"34" } ]}';
console.log(text["employees"]);

console.log(typeof(text));

const obj = JSON.parse(text);
console.log(typeof(obj));
console.log(obj);

// Parcours de la liste des employés 
for (employee of obj.employees) {
    console.log(`Employé.e : ${employee.firstName} ${employee.lastName} - age : ${employee.age}`);
    console.log(employee.firstName + ' ' + employee.lastName);
}
