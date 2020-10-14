// var twoSum = function(nums, target) {
//     for (var i=0; i< nums.length - 1; i++)
//     {
//         for (var j= i + 1; j < (nums.length); j++)
//         {
//             if ((nums[i]+nums[j]) == target)
//                 {
//                     return [i,j];
//                 }
//         }
//     }
// };
// console.log(twoSum([3,7,4,6], 10));


//Here Both solutions are correct



var twoSum = function(nums, target) {
   
    for (let i = 0; i < nums.length-1; i++) 
    {
        for (let j = i+1;  j< nums.length; j++) {
            
            if ((nums[i]+nums[j]) == target) {
                
                return[i,j];
               
            }
            
        }
    
    
    }
};
        
    console.log(twoSum([1, 8, 2, 15], 10));
  
  
    
    