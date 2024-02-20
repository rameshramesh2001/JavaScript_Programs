class user{
    static increment = 0
    constructor(name,age){
        this.name = name
        this.age = age
        user.increment++
    }
    login(){
        console.log('hi',this.name)
        console.log('you are login')
    }
    logout(){
        console.log('hi',this.name)
        console.log('you are logout')
    }
}

class paidUser extends user{

    constructor(name,age){
        super(name,age)  //super keyword
        this.store = 100
    }
    message(){
        console.log('free 100GB data')
    }
    login(){
          super.login()
        console.log('Thank you for your supporting') //override
    }
}

let paidUser1 = new paidUser('Ramesh',22)

console.log(paidUser1)

paidUser1.login()
paidUser1.logout()