try{
    let num = 'd'
    if(num=='')
    throw('Empty')
    if(isNaN(num))
    throw('Enter valid number')
    console.log(num*2)
}
catch(error){
    console.log(error)
}