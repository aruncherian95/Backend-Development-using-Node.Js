const convertToRs = (dollar)=> {
    if(typeof dollar === 'number'){
        return dollar * 64
    }
    else{
        throw Error('Amount needs to be in Number')
    }
}
//myValue = convertToRs(5)
try {
    
    myValue = convertToRs('five')
    console.log(myValue);

} catch (error) {
    
}


console.log("I will not run if the program crashes above");


//trycatch block will not allow the programme to freeze. It throws a error and continue running 


