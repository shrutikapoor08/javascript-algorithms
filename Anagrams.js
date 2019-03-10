//Given two strings, write a function to determine if the second string is an anagram of the first string

//create a counter for char in 1.
//create a counter for char in 2.
//loop through the counters to check if the key and frequency match.
//return true if loop successfully completed, false otherwise

function validAnagram(string1, string2) {


    if(string1.length !== string2.length) {
        return false;
    }

    const counter1 = {};
    const counter2 = {};

    for( let s of string1 ){
        counter1[s] ? counter1[s]++ : 1;
    }

    for( let s of string2 ){
        counter2[s] ? counter2[s]++ : 1;
    }


    for( let key in counter1) {
        if( !counter2[key] ||
            (counter2[key] !== counter1[key])) {
            return false;
        }
    }


    return true;


}

console.log(validAnagram("", ""));
console.log(validAnagram("23", "fhujghjfjg"));
console.log(validAnagram("aaz", "aza"));
console.log(validAnagram("aaz", "aaz"));