const Manager = require('../lib/Manager');

// Makes manager object
test('creates an Manager object', () => {
    const manager = new Manager('Pina', 'pina.gomet@gmail');
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets role
test('gets role of employee', () => {
    const manager = new Manager('Pina', 'pina.gomet@gmail');

    expect(manager.getRole()).toEqual("Manager");
}); 