/*
41. First Missing Positive
Given an unsorted integer array, find the smallest missing positive integer.

*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
let lookup ={};

  //loop until object does not contain min+1
    //if found, return min+1
    // else return 1;

  //Find minimum
  let missingumber = 1;
  let minInArray = Math.max(0,nums[0]); //1
  nums.forEach( element => {
    lookup[element] = true;
    if(element < minInArray && element >= 0) {
      minInArray = element
    }
  });

  // minInArray = 1
  // Make an object

for(let item in lookup) {
  if(item > 0 && !lookup[+item+1]) {
    missingumber = Number(item) + 1;
    break;
  }
}

return  !lookup[1]  ? 1 : missingumber
};

let input = [1,2,0]
let input2 =  [3,4,-1,1]
let input3 =  [7,8,9,11,12]
let input4 =  [-5, 1000]

console.log(firstMissingPositive(input));
console.log(firstMissingPositive(input2));
console.log(firstMissingPositive(input3));
console.log(firstMissingPositive(input4));
