class Scooter{
    constructor(idNumber,chargingOrigin,chargingDropOff,batteryLife,){
        this.idNumber = idNumber
        this.chargingOrigin = chargingOrigin
        this.chargingDropOff = chargingDropOff
        this.chargingStations = []
        this.batteryLife = batteryLife
    }

    static chargingStations = ['Arlington', 'Dallas', 'DFW', ]

}
module.exports = Scooter