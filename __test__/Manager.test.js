const Manager = require('../lib/Manager');

// Makes manager object
test('creates an Manager object', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com', 4);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role
test('gets role of employee', () => {
    const manager = new Manager('Jared', 1, 'jared@fakemail.com');

    expect(manager.getRole()).toEqual("Manager");
}); 