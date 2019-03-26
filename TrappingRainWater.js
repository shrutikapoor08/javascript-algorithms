/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.
 */

/**
 * @param {number[]} height
 * @return {number}
 */


var trap = function(elevation) {
  let rightIndex = elevation.length - 1; //check if this needs to be 0 or 1
  let leftIndex = 0;
  let leftMax = 0;
  let rightMax = 0;
  let area = 0;

  while(leftIndex < rightIndex) {
    if(elevation[leftIndex] < elevation[rightIndex]) {
      elevation[leftIndex] >= leftMax ? leftMax = elevation[leftIndex] : area += (leftMax - elevation[leftIndex]);
      leftIndex++;
    } else {
      elevation[rightIndex] >= rightMax ? (rightMax = elevation[rightIndex]) : area += (rightMax - elevation[rightIndex])
      rightIndex--
    }
  }

  return area;
};


// const height = [0,1,0,2,1,0,1,3,2,1,2,1];
const height1 = [4,2,3];
console.log(trap(height1));