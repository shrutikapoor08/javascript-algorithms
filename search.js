const linearSearch = (inputArray, target) => {
    for(let i in inputArray) {
        if(inputArray[i] === target) return Number(i);
    }
    return -1;
};

// console.log(linearSearch([2, 3, 4], 14));


const binarySearch = (sortedArray, target) => {
    let leftPointer = 0;
    let rightPointer = sortedArray.length - 1;
    if(target < sortedArray[0] || target > sortedArray[sortedArray.length - 1]) return -1;

    while(leftPointer <= rightPointer) {
        let middle = Math.floor((rightPointer + leftPointer ) / 2);
        if(sortedArray[middle] === target) return middle;
        else if(sortedArray[middle] > target) {
            rightPointer = middle - 1;
        } else {
            leftPointer = middle + 1 ;
        }
    }


    return -1;
};

console.log(binarySearch([2, 3, 4, 5, 6, 7, 10, 23, 45, 46, 56, 58, 81], 45 ));
