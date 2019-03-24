/* There are two sorted arrays nums1 and nums2 of size m and n respectively.

  Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

  You may assume nums1 and nums2 cannot be both empty.
  */

const findMedianSortedArrays = function(nums1, nums2) {
    if(!nums1.length && !nums2.length) return;
    const newArray = [...nums1, ...nums2];
    newArray.sort((a,b)=>{ return a-b;});
    if(newArray.length%2 !== 0){
      return newArray[Math.floor(newArray.length/2)];}
    else {
      return (newArray[(newArray.length/2)-1]+newArray[(newArray.length/2)])/2;}
};


let arrays1 = [1,3];
let arrays2 = [2];
console.log(findMedianSortedArrays(arrays1, arrays2));
