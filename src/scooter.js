class Scooter{
    constructor(idNumber,chargingOrigin,chargingDropOff,checkedOut){
        this.idNumber = idNumber
        this.chargingOrigin = chargingOrigin
        this.chargingDropOff = chargingDropOff
        this.checkedOut = checkedOut
    }

    static chargingStations = ['Arlington', 'Dallas', 'DFW', ]

    isCheckedOut (checkedOut) {
        if (this.checkedOut === 'Y' ) {
            return true
        } else if (this.checkedOut === 'N') {
            return false
        }
    }

}
let s1 = new Scooter(3, 'DFW', 'Dallas', 'N')
console.log(s1.isCheckedOut())

module.exports = Scooter