const Manager = require('../lib/Manager');

// Creates manager
test('creates a manager', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 4);  
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Manager role
test('manager role', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 