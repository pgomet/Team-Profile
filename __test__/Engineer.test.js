const Engineer = require('../lib/Engineer');

// Makes engineer object
test('creates an engineer', () => {
    const engineer = new Engineer('Name', 1, 'name@fakemail.com', 'username');
    expect(engineer.github) .toEqual(expect.any(String));
});

// Gets role
test('employee role', () => {
    const engineer = new Engineer('Name', 1, 'name@fakemail.com', 'username');
    expect(engineer.getRole()).toEqual("Engineer");
});

// Gets GitHub
test('engineer github', () => {
    const engineer = new Engineer('Name', 1, 'name@fakemail.com', 'username');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
