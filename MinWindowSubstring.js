/* Given a string S and a string T, find the minimum window in S which will contain all
the characters in T in complexity O(n).

  Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"

*/

const minWindow = function(string, target) {
  let substr = "";
  let minLength = Infinity;
  let ptr = 0;

  for (let i = 1; i <= string.length; i++) {
    let str = string.slice(ptr, i);

    if (has(str, target) && str.length < minLength) {
      minLength = str.length;
      substr = str;
      while(!target.includes(string[i]) && i<string.length-1) {
        i++;
      }

      ptr = i;
    }
  }

  return substr;
};

function has(s, t) {
  const lookup = {};
  //create a lookup for string
  for(let i =0; i<s.length; i++) {
    if(!lookup[s[i]]) lookup[s[i]] = true;
  }
  for(let j =0; j<t.length; j++) {
    if(!lookup[t[j]]) return false;
  }
  return true;
}



let input = 'ADOBECODEBANC';
let target = 'ABC';



// console.log(minWindow(input, target));
console.log(minWindow("AAAAAB", "AB"));
console.log(minWindow("A", "AA"));


/*
var minWindow = function(s, t) {
  // sliding window, from soln
  if (t.length == 0) return ''

  let [ left, right ] = [0, 0]

  const wordMap = (str) => {
    const map = {}
    for (let c of str) {
      if (map[c]) map[c] += 1
      else map[c] = 1
    }
    return map
  }

  const tMap = wordMap(t)

  let tMapCopy = Object.assign({}, tMap)
  let keysCount = 0
  let min = null

  while (left < s.length && right < s.length) {
    // initial window
    if (s[right] in tMap) {
      tMapCopy[s[right]] -= 1
      if (tMapCopy[s[right]] == 0) keysCount += 1
    }
    if (keysCount >= Object.keys(tMap).length) {
      // ideal sliding window found
      // start sliding left until min(i)
      while (left < right) {
        let key = s[left]
        if (tMapCopy[key] == 0) {
          // characters with negative count
          // were more (in duplicates)
          break
        } else {
          // negative
          tMapCopy[key] += 1
        }
        left += 1
      }
      if (
        min == null
        || min[1] - min[0] > right - left
      ) {
        min = [left, right]
      }
    }
    right += 1
  }

  if (min !== null) return s.substr(min[0], min[1] - min[0] + 1)
  return ""
};
 */