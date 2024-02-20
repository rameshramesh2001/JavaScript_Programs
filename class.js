class user{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    login(){
        console.log('hi',this.name)
        console.log('You are login')
    }
    logout(){
        console.log('You are logout')
    }
}

let userONE = new user('Ramesh',22)
let userTWO = new user('Raja',21)

userONE.login()
