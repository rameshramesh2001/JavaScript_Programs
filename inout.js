let a = 100 //global scope
function outer(name){
    // console.log('Bread')
    let int = 'Bread'
    function inner(){
        // console.log('Butter')
        let out = 'Butter'
        console.log('inner',int)
        console.log('outer',out)
        console.log('a is',a)
        console.log('name is',name)
    }
    inner()
}
outer('Ramesh')