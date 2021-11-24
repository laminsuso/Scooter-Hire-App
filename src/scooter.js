class Scooter{
    constructor(idNumber,chargingOrigin,chargingDropOff,checkedOut){
        this.idNumber = idNumber
        this.chargingOrigin = chargingOrigin
        this.chargingDropOff = chargingDropOff
        this.checkedOut = checkedOut
    }

    static chargingStations = ['Arlington', 'Dallas', 'DFW', ]


    rent(){
        this.checkedOut = !this.checkedOut
    }

}
module.exports = Scooter