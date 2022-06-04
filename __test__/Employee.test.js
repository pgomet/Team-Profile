const Employee = require('../lib/Employee');

// Creates employee
test('Creates new employee', () => {
    const employee = new Employee('Name', 1, 'name@fakemail.com');

    expect(employee.name).toBe('Name');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

// Checks employee info
test('Checks employee info', () => {
    const employee = new Employee('Name', 1234, 'name@fakemail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})