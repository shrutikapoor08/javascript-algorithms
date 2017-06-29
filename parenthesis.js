/*
Problem: Interview Cake
"Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing."
Write a function that, given a sentence like the one above, along with the position of an opening parenthesis, finds the corresponding closing parenthesis.
Example: if the example string above is input with the number 10 (position of the first parenthesis), the output should be 79 (position of the last parenthesis).
*/
function openParenthesis(s, index){
var openParenthesis = 1;
	for( let i= index +1; i <s.length; i++){
  	if(s[i] === '(') openParenthesis++;
    else if(s[i] === ')') {
    	openParenthesis--;
      if(openParenthesis === 0) return i;
    }
  }
  return -1;
}

var result = openParenthesis("he(()", 2);
console.log(result);//outputs -1;
