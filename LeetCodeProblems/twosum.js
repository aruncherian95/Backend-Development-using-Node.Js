//Below All solutions are correct

//1.Use of var keyword

var twoSum = function(nums, target) {
    for (var i=0; i< nums.length - 1; i++)
    {
        for (var j= i + 1; j < (nums.length); j++)
        {
            if ((nums[i]+nums[j]) == target)
                {
                    return [i,j];
                }
        }
    }
};
console.log(twoSum([3,7,4,6], 10));



//2.Use of let keyword inside the loop



// var twoSum = function(nums, target) {
   
//     for (let i = 0; i < nums.length-1; i++) 
//     {
//         for (let j = i+1;  j< nums.length; j++) {
            
//             if ((nums[i]+nums[j]) == target) {
                
//                 return[i,j];
               
//             }
            
//         }
    
    
//     }
// };
        
// console.log(twoSum([1, 8, 2, 15], 10));




//3.Use of arrow function


// const twoSum = (arr, target) => {
//         var result = [];
    
//         for (var i = 0; i < arr.length; i++) {
//             for (var j = i + 1; j < arr.length; j++) {
//                 if (arr[i] + arr[j] === target) {
//                     result.push(i);
//                     result.push(j);
//                 }
//             }
//         }
//         return result;
//     }
//     console.log(twoSum([5, 4, 11, 15], 9));
  



//4.Use of map()

// let twoSum = function(nums, target) {
//     let numberIndex = new Map();
//     let result = [];

//     for (let i = 0; i < nums.length; i++) {
//       let num = nums[i];
//       let complement = target - num;

//       if (numberIndex.has(complement)) {
//         result[0] = numberIndex.get(complement);
//         result[1] = i;

//         return result;
//       }

//       numberIndex.set(num, i);
//     }

//     return result;
// };