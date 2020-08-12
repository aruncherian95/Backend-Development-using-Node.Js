//var isEven = (element) =>{
    // if(element%2===0)
    // return true;
    // else
    // return false;
//     return element%2===0;
// }

//console.log(isEven(2));


// var result = [2,3,6,8].every((e) =>{
//     return e%2===0;
// });


//OR YOU CAN DEFINE IN BELOW WAY / USE {} in case you use return stmnt or use ()    

var result = [2,3,6,8].every((e)=>(e%2===0));

console.log(result);