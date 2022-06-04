const Manager = require('../lib/Manager');

// Makes manager object
test('creates a manager', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 4);  
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role
test('manager role', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 