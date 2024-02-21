let reachA = new Promise((resolve,reject)=>{
    let Reached = true
    if(Reached)
    setTimeout(resolve,3000,'Ramesh Reached')
    else
    reject('Ramesh Not Reached')
})



// let takkalticket = new Promise((resolve,reject)=>{
//         let tcktbook = true
//         if(tcktbook)
//         setTimeout(resolve,5000,'850')
//         else
//         reject()
// })


//true condition


async function main1(){
   
    console.log('Hi')
    res = await reachA
    console.log(res)
    console.log('bye')

}
main1()


//false condition



// async function main1(){
//     try{
//     console.log('Hi')
//     res = await reachA
//     console.log(res)
//     console.log('bye')
// }
// catch(err){
//     console.log(err)
// }
// }
// main1()