const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Name', 1, 'name@fakemail.com', 'username');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Name', 1, 'name@gmail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee name', () => {
    const employee = new Employee('Name', 1, 'name@gmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// Gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Name', 1, 'name@gmail.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

// Gets emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Name', 1, 'name@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
