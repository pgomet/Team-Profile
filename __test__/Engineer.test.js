const Engineer = require('../lib/Engineer');

// Creates engineer
test('creates an engineer', () => {
    const engineer = new Engineer('Name', 1, 'name@fakemail.com', 'username');
    expect(engineer.github) .toEqual(expect.any(String));
});

// Employee role
test('employee role', () => {
    const engineer = new Engineer('Name', 1, 'name@fakemail.com', 'username');
    expect(engineer.getRole()).toEqual("Engineer");
});

// Engineer role
test('engineer github', () => {
    const engineer = new Engineer('Name', 1, 'name@fakemail.com', 'username');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
