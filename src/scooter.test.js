const Scooter = require('./scooter')

describe('Scooter Class', ()=>{
    const testScooter = new Scooter(3,'DFW','Dallas','Y')
    test('Test the Scooter class', ()=>{
        expect(testScooter.idNumber).toBe(3)
        expect(testScooter.chargingOrigin).toBe('DFW')
        expect(testScooter.chargingDropOff).toBe('Dallas')
        expect(testScooter.checkedOut).toBe('Y')
        expect(testScooter.isCheckedOut()).toBe(true)
    })

})