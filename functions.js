// var factor = 'Ajith'
// var fcricketer = 'Dhoni'
// var fmovie = 'KGF'

// function add(){
//     console.log("My favorite is :"+factor)
//     console.log("My favorite is :"+fcricketer)   //normal function
//     console.log("My favorite is :"+fmovie)
// }

// add()





// function add(a,b){
//     return a+b               //parameter function
// }                                  
// console.log(add(20,20))

// function Mname(name='there'){
//     console.log('hi',name)          //default function
// }
// Mname('Ramesh')


// function recursion(n){
//     if(n==1){
//         console.log(1)     //function call itself  Recursive function
//     }
//     else{
//         console.log(n)
//         recursion(n-1)
//     }
// }
// recursion(10)


//function Expression

// function fname(num){
//     return(num%2==0)
// }
// console.log(fname(6))


//sum of two num

// var arr = [1,2,3,4,5]

// let sum = 0
// function sumofdigit(arr){
// for(let val of arr){
//    sum = sum+val
// }
// return sum
// }
// console.log(sumofdigit(arr))


//Arrow Function

// let circle = (l,b,h) => {

//     return l*b*h

// }
// console.log(circle(1,2,3))


//add sum using arrow function

// let arr = [1,2,3,4,5]

// let sumofdigit = (arr) =>{
//     let sum =0
//     for(let total of arr){
//         sum += total
//     }
//     return sum
// }
// console.log(sumofdigit(arr))


//Area cicle using Arrow function


// let Area = r => Math.PI*r*r
// console.log(Area(5))


//variable argument Rest parameter

// let Sample = function(...args){
//     let sum = 0
//     for(let val of args){
//         sum +=val
//     }
//     return sum
// }
// console.log(Sample(1,2,3,4))


// Genertor Function


// function* indexGenertor (){
//    let index = 1
//    while(true)
//    yield index++
   
// }
// const gen = indexGenertor()
//    console.log(gen.next().value)
//    console.log(gen.next().value)


//  callback function

// function main(name='there'){
//     console.log('hello'+name)

// }
// function main1 (name1='there'){
//     console.log('hello'+name1)
// }
// function greek (callback){
//     console.log(callback)
//     callback('Ramesh')
// }
// greek(main)
// greek(main1)


//callback function using array

// let arr = [1,2,3,4]

// arr.forEach(print)  //callback function

// function print(val){ 
//     console.log(val)
// }


//callback using arrow function

// let arr = [1,2,3,4,5]

// arr.forEach(val => console.log(val)) //Arrow function callback


// let arr = ['ramesh','raja','perumal']

// arr.forEach((val,index,arr)=>{
//     arr[index]=val.toUpperCase()
// })
// console.log(arr)



// console.log(0!=0)


// let arr =[5,6,7,81,8,14]

for(let i=10;i>0;i--){

console.log(i)
}



