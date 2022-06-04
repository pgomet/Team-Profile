const Intern = require('../lib/Intern');

// Makes Intern object
test('creates intern', () => {
    const intern = new Intern('Name', 1, 'name@gmail', '2University');
    expect(intern.school) .toEqual(expect.any(String));
});

// Gets role
test('employee role', () => {
    const intern = new Intern('Name', 1, 'name@gmail', '2University');
    expect(intern.getRole()).toEqual("Intern");
});

// Gets school
test('intern school', () => {
    const intern = new Intern('Name', 1, 'name@gmail', '2University');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
