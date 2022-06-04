const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('name', 1, 'name@fakemail.com');

    expect(employee.name).toBe("name");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks employee info', () => {
    const employee = new Employee('name', 1234, 'name@fakemail.com');

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})