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

        totalAmount(){
            return (this.endTime - this.startTime) * 0.15 + 1
        }
    }

    let r1 = new User("me", "Top", "3425665", "suso@menubar.com", "444-657-9763", 1200, 1700)
    console.log(r1.totalAmount())
module.exports = User