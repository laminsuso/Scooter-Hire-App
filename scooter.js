class Scooter{
    constructor(idNumber,chargingOrigin,chargingDropOff,batteryLife,){
        this.idNumber = idNumber
        this.chargingOrigin = chargingOrigin
        this.chargingDropOff = chargingDropOff
        this.chargingStations = []
        this.batteryLife = batteryLife
        this.checkedOut =[]
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
let s1 = new Scooter(3, 'DFW', 'Dallas', 'Y')
module.exports = Scooter