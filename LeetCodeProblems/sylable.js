
// let one = "gang";  //1 syllable
// let two = "gucci"; //2 syllable
// let three = "gucci";

// const countVowels = str => Array.from(str)
//   .filter(letter => 'aeiou'.includes(letter)).length;
  
  
//   console.log(countVowels('gang, gucci ,gang, gang'));

//   if (one) {
      
//   }



let arr = [ 
    { ent: 'gang', vals: [ 'gang','aabc','dcb' ] },
    { ent: 'gucci', vals: [ 'gucci' ] } 
  ]

function getCombinations(arr){
    if (arr.length === 0) return [[]]
    let [current, ...rest] = arr
    let combinations = getCombinations(rest)
    return current.vals.reduce((a, string) => 
        [ ...a, ...combinations.map(c => [string, ...c])], [])
}
let c = getCombinations(arr)
console.log(c)


  

