class user1{
    login(){
        console.log('hi')
        console.log('you are login')
        return this
    }
    logout(){
        console.log('hi')
        console.log('you are logout')
        return this
    }
}

let user2 = new user1()

user2.login().logout()