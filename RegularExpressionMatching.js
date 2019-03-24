/*
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
 */
//Dynamic Programming - Tabulation approach.

let isMatch = function(string,pattern) {
  //string and pattern can be both empty
  if(string.length === 0 || pattern.length === 0) return string.length && pattern.length;
  let lookup = [[true]];
  console.log(lookup);

  //If string is empty, * can match
  for(let j=0; j < pattern.length; j++) {
    if(pattern[j] === '*') lookup[0][j] = lookup[0][j-1];
  }

  for(let i =1; i<= string.length; i++) {
    for(let j =1 ; j<= pattern.length; j++ ) {
      if ((pattern[j-1] === '.') || (pattern[j-1] === string[i-1])) {

        lookup[i][j] = lookup[i-1][j-1];
      }
      else if (pattern[j] === '*') {
        lookup[i][j] = lookup[i][j-1];
      }
      else lookup[i][j] = false;
    }
  }
  return lookup[string.length -1][pattern.length -1]

};


let s = "aa";
let p = "a";

console.log(isMatch(s, p));