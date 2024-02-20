class student{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    getname(){
         return this.name
    }
    getage(){
        return this.age
    }
    setname(name){
        this.name = name
    }
    setage(age){
        this.age = age
    }
}

let ans = new student()

ans.setname('Ramesh')
ans.setage(22)
console.log(ans.getname())
console.log(ans.getage())