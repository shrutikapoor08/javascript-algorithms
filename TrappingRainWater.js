/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.
 */

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(elevation) {

  //Find local max
  let localMax = 0;
  let leftIndex;
  let rightIndex = 0;

  while(localMax === 0) {
    //find first elevation
    localMax = elevation[rightIndex];
    rightIndex++;
  }
  leftIndex = rightIndex - 1;
  //found first maxima. index = 1

while(leftIndex < rightIndex) {
  if(rightIndex === elevation.length - 1) {
    //restart if no higher elevation found.
    leftIndex++;
    rightIndex = leftIndex +1;
    break;
  }
  while(elevation[rightIndex] < elevation[leftIndex]) {
    rightIndex++;
  }
  console.log(elevation[leftIndex], elevation[rightIndex]);
  console.log(leftIndex, rightIndex);
  //rightindex = 3. leftindex = 1.

  }

};


const height = [0,1,0,2,1,0,1,3,2,1,2,1];
console.log(trap(height));

