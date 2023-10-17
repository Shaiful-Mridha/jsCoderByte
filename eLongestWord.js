/*
Longest Words
Have the function LongestWord(sen) take the sen parameter 
being passed and return the longest word in the string. 
If there are two or more words that are the same length, 
return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. 
Word may also contain numbers,
 for example "Hello world123 567"
Examples
Input: "fun&!! time"
Output: time
Input: "I love dogs"
Output: love
*/

function LongestWord(sen) {
  var arr = sen.match(/[a-z]+/gi);
  var sorted = arr.sort(function (a, b) {
    return b.length - a.length;
  });
  return sorted[0];
}
console.log(LongestWord("I love dogs"));
