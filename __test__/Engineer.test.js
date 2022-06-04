const Engineer = require('../lib/Engineer');

// Makes engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Name', 1, 'name@fakemail.com', 'username');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Gets role
test('gets role of employee', () => {
    const engineer = new Engineer('Name', 1, 'name@fakemail.com', 'username');

    expect(engineer.getRole()).toEqual("Engineer");
});

// Gets GitHub
test('gets engineer github value', () => {
    const engineer = new Engineer('Name', 1, 'name@fakemail.com', 'username');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});
