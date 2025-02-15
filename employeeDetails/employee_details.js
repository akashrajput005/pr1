const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' }
  //... More employee records can be added here
];


// Function to display all employees
function displayAllEmployees() {
  const employeesList = employees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  
  document.getElementById('employeesDetails').innerHTML = employeesList;
}

// Function to calculate total salaries
function calculateTotalSalaries() {
  const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
  alert(`Total Salaries: $${totalSalaries}`);
}

// Function to display only HR employees
function displayHREmployees() {
  const hrEmployees = employees.filter(employee => employee.department === 'HR');
  const hrEmployeesDisplay = hrEmployees
    .map(employee => `<p>${employee.id}: ${employee.name} - ${employee.department} - $${employee.salary}</p>`)
    .join('');
  
  document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

// Function to find an employee by ID
function findEmployeeById(employeeId) {
  const id = Number(employeeId);  // Convert input to a number
  const foundEmployee = employees.find(employee => employee.id === id);

  if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =
      `<p>${foundEmployee.id}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
  } else {
    document.getElementById('employeesDetails').innerHTML = '<p>No employee found with this ID</p>';
  }
}
