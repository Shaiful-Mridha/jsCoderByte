/*
CodelandUsernameValidation(str) take the str parameter being passed and 
determine if the string is a valid username according to the following rules:

1. The username is between 4 and 25 characters.
2. It must start with a letter.
3. It can only contain letters, numbers, and the underscore character.
4. It cannot end with an underscore character.

If the username is valid then your program should return the string true, otherwise return the string false.
Examples
Input: "aa_"
Output: false
Input: "u__hello_world123"
Output: true
*/

function isLowerCase(c) {
  return c >= "a" && c <= "z";
}
function isUpperCase(c) {
  return c >= "A" && c <= "Z";
}
function isNumber(c) {
  return c >= "0" && c <= "9";
}
function CodelandUsernameValidation(str) {
  if (!str || str.length < 4 || str.length > 25) {
    return false;
  }

  if (!isLowerCase(str[0]) && !isUpperCase(str[0])) {
    return false;
  }

  for (var i = 0; i < str.length; i++) {
    const c = str[i];
    if (!isLowerCase(c) && !isUpperCase(c) && c !== "_" && !isNumber(c)) {
      return false;
    }
  }

  if (str[str.length - 1] === "_") {
    return false;
  }

  return true;
}

console.log(CodelandUsernameValidation(""));

/*
  if (str.length < 4 || str.length > 25) {
    return false;
  }
  if (!str[0].match(/[a-z]/i)) {
    return false;
  }
  if (!str.match(/^[0-9a-zA-Z_]+$/)) {
    return false;
  }
  if (str[str.length -1] === '_') {
    return false;
  }
  return true;
}
 */
