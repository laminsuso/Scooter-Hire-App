class User{
    constructor(name,password,cardNumber,email,phoneNumber,startTime,endTime,age){
        this.name = name
        this.password = password
        this.cardNumber = cardNumber
        this.email = email
        this.phoneNumber = phoneNumber
        this.startTime = startTime
        this.endTime = endTime
        this.age = age
    }

        totalPayment(){
            return (this.endTime - this.startTime) * 0.15 + 1
        }

        ageTest(){
            if(this.age >= 18){
                return('You can rent')
            }else{
                return('You cannot rent')
            }
        }
    }
    let a = new User("lamin", '12345', '6789', 'e@MediaList.com', '345-987-3478', 1200,1700,19)
    console.log(a.ageTest())
module.exports = User