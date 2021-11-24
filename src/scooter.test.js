const Scooter = require('./scooter')

describe('Scooter Class', ()=>{
    const testScooter = new Scooter(3,'DFW','Dallas',true)
    test('Test the Scooter class', ()=>{
        expect(testScooter.idNumber).toBe(3)
        expect(testScooter.chargingOrigin).toBe('DFW')
        expect(testScooter.chargingDropOff).toBe('Dallas')
        expect(testScooter.checkedOut).toBe(true)
    })

    test('testRent method', ()=>{
        testScooter.rent()
        expect(testScooter.checkedOut).toBe(false)
    })

})