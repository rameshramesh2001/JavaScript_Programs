// let priceUSD =[20,35,50]

// let priceINR = priceUSD.map(x => x*83) //Arrow Function
// console.log(priceINR)

let priceUSD =[20,35,50]

let priceINR = priceUSD.map(convert)

function convert(val){
    return val*83
}
console.log(priceINR)