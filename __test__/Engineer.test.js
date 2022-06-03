const Engineer = require('../lib/Engineer');

// Makes engineer object
test('creates an Engineer object', () => {
    const engineer = new Engineer('Pina','pina.gomet@gmail', 'pgomet');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// Gets GitHub
test('gets engineer github value', () => {
    const engineer = new Engineer('Pina','pina.gomet@gmail', 'pgomet');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Gets role
test('gets role of employee', () => {
    const engineer = new Engineer('Pina','pina.gomet@gmail', 'pgomet');

    expect(engineer.getRole()).toEqual("Engineer");
});