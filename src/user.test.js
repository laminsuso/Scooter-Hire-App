const User = require('./user')

describe('User Clas', () =>{

    test('has a name', () =>{
        const testName = new User('Lamin')
        expect(testName.name).toBe('Lamin')
    })

    test('has a password', () =>{
        const testPassword = new User('Lamin','Password')
        expect(testPassword.password).toBe('Password')
    })

    test('has a cardNumber', () =>{
        const testcardNumber = new User('Lamin','Password','3425665')
        expect(testcardNumber.cardNumber).toBe('3425665')
    })

    test('has a email', () =>{
        const testEmail = new User('Lamin','Password','3425665','suso@menubar.com')
        expect(testEmail.email).toBe('suso@menubar.com')
    })

    test('has a phoneNumber', () =>{
        const testPhoneNumber = new User('Lamin','Password','3425665','suso@menubar.com','444-657-9763')
        expect(testPhoneNumber.phoneNumber).toBe('444-657-9763')
    })

    test('has a startTime', () =>{
        const testStartTime = new User('Lamin','Password','3425665','suso@menubar.com','444-657-9763',1200)
        expect(testStartTime.startTime).toBe(1200)
    })

    test('has a endTime', () =>{
        const testEndTime = new User('Lamin','Password','3425665','suso@menubar.com','444-657-9763',1200, 1700)
        expect(testEndTime.endTime).toBe(1700)
    })

    test('has a totalPayment', () =>{
        const testTotalPayment = new User('Lamin','Password','3425665','suso@menubar.com','444-657-9763',1200, 1700,76)
        expect(testTotalPayment.totalPayment()).toBe(76)
    })
})