/* Given a contiguous sequence of numbers in which each number repeats thrice,
there is exactly one missing number. Find the missing number.

eg: 11122333 : Missing number 2
11122233344455666 Missing number 5
 */

//Create a hashmap
//add all numbers to hashmap.
// go through hashmap and return object with less than 3 frequency


const findMissingNumber  = (inputString, maxFrequency) => {
    const hashMap = {};
    [...inputString].forEach( (i) => {
       if(hashMap[i]) {
           hashMap[i] = Number(hashMap[i]) + 1;
       }
       else {
           hashMap[i] = 1;
       }
    });

    for (const key of Object.keys(hashMap)) {
        if(hashMap[key] < maxFrequency) return key;
    }

}


console.log(findMissingNumber('11122233344455666', 3));