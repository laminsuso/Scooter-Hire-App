const Scooter = require('./scooter')

describe('Scooter Class', ()=>{
    test('Has an id', ()=>{
        const testId = new Scooter('01')
        expect(testId.idNumber).toBe('01')
    })
})