const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Pina', 'pina.gomet@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Gets id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Pina', 'pina.gomet@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Pina', 'pina.gomet@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// Gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Pina', 'pina.gomet@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Pina', 'pina.gomet@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 