class User{
    constructor(name,password,cardNumber,email,phoneNumber,startTime,endTime){
        this.name = name
        this.password = password
        this.cardNumber = cardNumber
        this.email = email
        this.phoneNumber = phoneNumber
        this.startTime = startTime
        this.endTime = endTime
        this.timeRented = []
    }
    paidInFull(timeRented){
        return (timeRented * .15) + 1
    }
}
module.exports = User