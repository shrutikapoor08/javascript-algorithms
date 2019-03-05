/*You're given strings J representing the types of stones that are jewels, and S representing the stones you have.  Each character in S is a type of stone you have.  You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters. Letters are case sensitive, so "a" is considered a different type of stone from "A".


Input: J = "aA", S = "aAAbbbb"
Output: 3

*/
/* for every j in J, find occurrence of j in S
stop when j is at the end.
return sum of occurrence of j
 */

const countJewels = (jewels, stones)  => {
    const stonesMap = {};

    [...stones].forEach( s => {
        if(stonesMap[s]) {
            stonesMap[s] = stonesMap[s] + 1;
        }
        else {
            stonesMap[s] = 1;
        }
    });


    return [...jewels].reduce((acc, j) => {
        if(stonesMap[j]) {
            return acc + stonesMap[j]
        }
    }, 0) || 0;
};

let J = "x";
let S = "aAAbbbb";
console.log(countJewels(J, S));

