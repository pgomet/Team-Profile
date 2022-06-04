const Intern = require('../lib/Intern');

// Creates intern
test('creates intern', () => {
    const intern = new Intern('Name', 1, 'name@gmail', '2University');
    expect(intern.school) .toEqual(expect.any(String));
});

// Employee role
test('employee role', () => {
    const intern = new Intern('Name', 1, 'name@gmail', '2University');
    expect(intern.getRole()).toEqual("Intern");
});

// Intern school
test('intern school', () => {
    const intern = new Intern('Name', 1, 'name@gmail', '2University');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});
