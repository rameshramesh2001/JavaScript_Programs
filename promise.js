// let takkalticket = new Promise((resolve,reject)=>{
//     let tcktbook = true
//     if(tcktbook)
//     resolve(850)
//     else
//     reject()
// })

// takkalticket.then((amount) => console.log(`Ticket confirm amt Rs.${amount}`)) //Arrow function
// .catch(() => console.log('Ticket Rejected'))

// function sucess(){
//     console.log('Ticket Confirm')
// }
// function failure(){                     //Normal Function
//     console.log('Ticket Rejected')
// }







let reachA = new Promise((resolve,reject)=>{
    let Reached = true
    if(Reached)
    setTimeout(resolve,3000,'Raja Reached')
    else
    reject('Raja Not Reached')
})
let reachB = new Promise((resolve,reject)=>{
    let Reached = false
    if(Reached)
    setTimeout(resolve,3000,'Perumal Reached')
    else
    reject('Perumal Not Reached')
})
let reachC = new Promise((resolve,reject)=>{
    let Reached = true
    if(Reached)
    setTimeout(resolve,3000,'Ramesh Reached')
    else
    reject('Ramesh Not Reached')
})

//promise all

// Promise.all([reachA,reachB,reachC])
// .then((msg)=> console.log(msg))
// .catch((msg)=> console.log(msg))

//promise allsettled


Promise.all([reachA,reachB,reachC])
.then((msg)=> console.log(msg))
.catch((msg)=> console.log(msg))


// reachA.then((msg)=> console.log(msg))
// .catch((msg) => console.log(msg))