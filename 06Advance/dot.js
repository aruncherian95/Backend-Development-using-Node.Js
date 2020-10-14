//Super Dots functionality


//When the data comes in a array and we need to do operations on it values, we might neeed to use this superdots


function deposit(...money){
    console.log(money);
    
    let balance = 0;
    for(let i=0; i < money.length; i++){
    balance += money[i];

}
return balance;
}

console.log(deposit(100,40,50,10));


//Now to find the max value from the array below

let addMoney = [32,55,66,77,21];
console.log(...addMoney);
console.log(Math.max(...addMoney));
