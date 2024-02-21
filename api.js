// fetch('https://api-thirukkural.vercel.app/api?num=1')
// .then((res) => console.log(res.json()))

fetch('https://official-joke-api.appspot.com/jokes/programming/random')
.then((res)=> res.json())
.then((msg)=>console.log(msg[0].setup,msg[0].punchline,msg[0].id))
.catch((err)=>console.log(err))


// fetch('https://api-thirukkural.vercel.app/api?num=25')
// .then(res => {
//     if(res.ok)
//         console.log('success')
//     else
//         console.log('Failed')
//     return res.json()
// })
// .then(msg => console.log(msg.line1,msg.line2,msg.tam_exp) )
// .catch(err=>console.log(err))