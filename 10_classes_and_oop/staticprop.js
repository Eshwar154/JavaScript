class User{
    constructor(username){
            this.username= username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){                 //access restricted to instance using static
        return `123`
    }
}

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email =email
    }
}

const iphone = new Teacher("iphone","i@phone.com")
iphone.logMe()
console.log(iphone.createId());

const hitesh = new User("hitesh")
//console.log(hitesh.createId())