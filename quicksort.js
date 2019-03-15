/*
Quick sort
PIVOT!
- the runtime of quick sort depends on pivot sort
- quicksort is in place
- at the end function returns the index of pivot


Quicksort -
- call the pivot helper on the array
- when the helper returns the updated pivot index, recursively call the pivot helper on the subarray to the left of the
index and then to the right of the index.
- base case occurs when subarray has less than 2 elements
 */


function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function pivot(arr, start = 0, end = arr.length -1) {
let pivot = arr[start];
let swapIndex = start;

for(let i= start+1; i<arr.length; i++) {
    if(pivot > arr[i]) {
        swapIndex++;
        swap(arr, swapIndex, i);
    }
}
swap(arr, start, swapIndex);
return swapIndex;
}

function quickSort(arr, left =0, right = arr.length-1) {
    if(left < right) {
        let pivotIndex = pivot(arr, left, right);
//left
        quickSort(arr, left, pivotIndex - 1);
//right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([1009, 8, -2, 1, 5, 7, 6, 3]));