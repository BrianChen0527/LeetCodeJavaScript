//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if(str === ""){
    return "";
  }
  let new_len = str.length-1;
  return str.charAt(new_len) + reverseString(str.substring(0,new_len));
}

reverseString('yoyo mastery')
//should return: 'yretsam oyoy'