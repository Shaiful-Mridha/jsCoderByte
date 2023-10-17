/*
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: the first element will represent a list of comma-separated numbers sorted in ascending order, the second element will represent a second list of comma-separated numbers (also sorted). Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order. If there is no intersection, return the string false.
Example
Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Output: 1,4,13
Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Output: 1,9,10
*/

function FindIntersection(strArr) {
  // Splitting the string elements of strArr into arrays
  const arr1 = strArr[0].split(", ");
  const arr2 = strArr[1].split(", ");

  // Creating an empty array to store the intersection
  const intersection = [];

  // Looping through each element in arr1
  for (let i = 0; i < arr1.length; i++) {
    // Checking if the element is present in arr2
    if (arr2.includes(arr1[i])) {
      // Adding the element to the intersection array
      intersection.push(arr1[i]);
    }
  }

  //// If there is no intersection, return "false"
  if (intersection.length === 0) {
    return "false";
  }

  // Joining the intersection array into a comma-separated string
  const result = intersection.join(",");

  return result;
}

/// Testing the function
console.log(FindIntersection(["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]));
// Output: 1,4,13

console.log(FindIntersection(["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]));
// Output: 1,9,10
