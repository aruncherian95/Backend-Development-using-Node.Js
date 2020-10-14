var getData = (temp,cold=10) => {
if(temp<cold){
    return "This is cold"
}else{
    return "This is not cold"
    }
}

console.log(getData(40,20));  //Code hoisting allows you to define the parameters after the first initialization of the value. 