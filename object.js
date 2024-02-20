let user = {name:'Ramesh',Age:22, //object

login(){
   console.log('hello',this.name)
   console.log('you are login')
},
logout(){
    console.log('You are logout')
}
}
user.login()