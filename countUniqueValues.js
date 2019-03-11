/* Implement a function called countUniqueValues which accepts a sorted array, and counts
the unique values in the array. There can be negative numbers in the array but it will
always be sorted
 */


//Because it is sorted, we should utilize that
//Initialize 2 pointers at start - a, b and counter = 0
// While pointer b index is less than length index
// If pointer a = pointer b, then increment pointer b.
// else count++, and make pointer a = b.

function countUniqueValues(input) {
    if(input.length === 0) return 0;
    let pointerA = 0;
    let pointerB = 0;
    let counter = 1;

    while(pointerB <= input.length - 1){
        if( input[pointerA] === input[pointerB] ) {
            pointerB++;
        } else {
            counter++;
            pointerA = pointerB;
        }
    }
    return counter

}


console.log(countUniqueValues([]));
console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 1 , 2, 4 , 5]));
console.log(countUniqueValues([1, 1, 1, 1, 1]));
console.log(countUniqueValues([-1, 0 , 1, 1, 1]));