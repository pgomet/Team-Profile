const Intern = require('../lib/Intern');

// Makes Intern object
test('creates an Intern object', () => {
    const intern = new Intern('Pina', 'pina.gomet@gmail', '2University');
    
    expect(intern.school) .toEqual(expect.any(String));
});

// Gets school
test('gets employee school', () => {
    const intern = new Intern('Pina', 'pina.gomet@gmail', '2University');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role
test('gets role of employee', () => {
    const intern = new Intern('Pina', 'pina.gomet@gmail', '2University');

    expect(intern.getRole()).toEqual("Intern");
});