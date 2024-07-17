/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:


***********************************************************************/
/*
1. Function that takes in string and reverses it
  a. 

*/

function reverse(str) {
  if (str.length <= 1) {
    return str;
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
    }
}


reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
