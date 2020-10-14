//Dynamic object creation


let score = 900;
let wrath = "angry"

let myObj = {
    user : 'John',
    score : 212,
    angry : 99,
    highScore(){
        console.log("Your Score is" + this.score);
    }
}

console.log(myObj.score);
console.log(myObj.highScore());
console.log(myObj[wrath]);