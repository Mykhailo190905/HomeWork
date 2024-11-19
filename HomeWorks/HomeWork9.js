let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function sumSalaries(department) {
    if (Array.isArray(department)) {
        return department.reduce((total, employee) => total + employee.salary, 0);
    } else {
        let total = 0;
        for (let subdep of Object.values(department)) {
            total += sumSalaries(subdep); 
        }
        return total;
    }
}
let totalSalary = sumSalaries(company);
console.log(totalSalary); 