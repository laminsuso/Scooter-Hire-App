const User = require('./user')

describe('User Clas', () =>{
    test('has a name', () =>{
        const testName = new User('Lamin')
        expect(testName.name).toBe('Lamin')
    })
})