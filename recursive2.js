//Write a recursive function reverse which accepts a string and returns a new string in reverse

function reverse(str) {
    const stringArray = [...str];

    function  innerReverse(strArray) {
        //base case
        if(strArray.length === 1) return strArray;
        //n - 1 case
        else return [strArray[strArray.length - 1], ...innerReverse(strArray-1) ]
    }

    innerReverse(stringArray);
    return stringArray.join('');


}

console.log(reverse('awesome'));

