// const generateCartesianProduct = (...sets) => {
//     return sets.reduce((acc, set) => {
//         return acc.flatMap((x) => set.map((y) => [...x, y]));
//     }, [[]]);
// };

// const findAttributeCombinations = (attributes) => {
//     const keys = Object.keys(attributes);
//     const attributeOptions = keys.map((key) => attributes[key]);

//     const attributeCombinations = [];
//     for (let i = 0; i < attributeOptions[0].length; i++) {
//         for (let j = 0; j < attributeOptions[1].length; j++) {
//             const variation = {
//                 [`variation${attributeCombinations.length + 1}`]: `${attributeOptions[0][i]}-${attributeOptions[1][j]}`
//             };
//             attributeCombinations.push(variation);
//         }
//     }

//     return attributeCombinations;
// };

// const attributes = {
//     color: ["red", "blue"],
//     size: ["small", "medium"],
// };

// const attributeCombinations = findAttributeCombinations(attributes);
// console.log(attributeCombinations);

// const generateVariations = (attributes) => {
//     const keys = Object.keys(attributes);
//     const attributeOptions = keys.map((key) => attributes[key]);

//     const variations = generateCartesianProduct(...attributeOptions).map((combination, index) => {
//         const variation = {};
//         combination.forEach((option, i) => {
//             variation[keys[i]] = option;
//         });
//         return { [`variation${index + 1}`]: Object.values(variation).join("-") };
//     });

//     return variations;
// };

// const attributes = {
//     color: ["red", "blue"],
//     size: ["small", "medium"],
// };

// const variations = generateVariations(attributes);
// console.log(variations);

















// // Q: Write a function that converts a string to a title case

// /* psdudo code

// convert words into array
// capitilize first chaharcter of each word
// join all words together
// */

// const titleCase = (title) => {

//     const toArray = title?.split(' ');
//     let titleCase = "";

//     for (let i = 0; i < toArray.length; i++) {
//         titleCase += toArray[i].charAt(0).toUpperCase() + toArray[i].slice(1) + " ";
//     }

//     return titleCase;
// }

// console.log(titleCase("i am amjad saeed"));

// /* Optimize version

// To optimize the time complexity of the code, you can make the following improvements:

// Instead of creating a new array using split() and toArray, you can directly iterate over the input string without splitting it. This avoids the additional memory allocation for the array.

// Rather than concatenating strings with the += operator, which creates a new string in each iteration, it's better to use an array to store the modified words and then join them at the end.
// This optimized code has a linear time complexity of O(n), where n is the length of the input string.
// */

// const titleCase = (title) => {
//     if (!title) return ""; // Handle empty string case

//     let titleCase = [];
//     let capitalizeNext = true;

//     for (let i = 0; i < title.length; i++) {
//         const char = title[i];

//         if (capitalizeNext && /[a-z]/.test(char)) {
//             titleCase.push(char.toUpperCase());
//             capitalizeNext = false;
//         } else {
//             titleCase.push(char.toLowerCase());
//         }

//         if (char === " ") {
//             capitalizeNext = true;
//         }
//     }

//     return titleCase.join("");
// };

// console.log(titleCase("i am amjad saeed"));

// Q: 2 Write a function that finds the maximum value in an array

// /* psdudo code
// sort array in ascending order
// get last element of array
// */

// const MaximumValue = (input) => {

//     const sortedArray = input?.sort((a, b) => { a - b });
//     return sortedArray[sortedArray?.length - 1];

// }

// console.log("Maximum value", MaximumValue([3, 5, 5, 7, 326]))

// /* Optimized Version
// This optimized code has a linear time complexity of O(n), where n is the length of the input array. It iterates over the array once, comparing each element to the current maximum value and updating it if necessary.
// */

// const MaximumValue = (input) => {
//     if (!input || input.length === 0) return undefined; // Handle empty input case

//     let maxValue = input[0];

//     for (let i = 1; i < input.length; i++) {
//       if (input[i] > maxValue) {
//         maxValue = input[i];
//       }
//     }

//     return maxValue;
//   };

//   console.log("Maximum value:", MaximumValue([3, 5, 5, 7, 326]));

// // Q: 3 Write a function that reverses the order of words in a sentence

// /*

// convert the words into array
// itertate the words revrse
// join the words

// */

// const reverseWords = (words) => {

//     const toArray = words?.split(' ');
//     const result = [];

//     for (let i = toArray?.length - 1; i >= 0; i--) {
//         result.push(toArray[i]);
//     }

//     return result.join(' ');

// }

// console.log(reverseWords("I am Amjad Saeed"));

// /*
// optimized version
// This optimized code has a linear time complexity of O(n), where n is the length of the input string. It iterates over the string once, building the reversed words. By avoiding the unnecessary array creation and using string manipulation, it improves efficiency compared to the original implementation.

// */

// const reverseWords = (words) => {
//     if (!words) return ""; // Handle empty string case

//     let reversedWords = "";
//     let currentWord = "";

//     for (let i = words.length - 1; i >= 0; i--) {
//         if (words[i] === " ") {
//             reversedWords = currentWord + " " + reversedWords;
//             currentWord = "";
//         } else {
//             currentWord = words[i] + currentWord;
//         }
//     }

//     reversedWords = currentWord + " " + reversedWords;
//     return reversedWords.trim();
// };

// console.log(reverseWords("I am Amjad Saeed"));

// // Q: 4 Write a function that counts the number of vowels in a given string

// /*

// intilize all vwels in array
// decalar count
// itertate the string and check eahc character in vowel array
// if wovel found then increment else not
// */

// const countWovels = (input) => {
//     const allVowels = ["a", "e", "i", "o", "u"];
//     let countVowels = 0;

//     for (let i = 0; i < input?.length; i++) {
//         if (allVowels?.includes(input[i]?.toLowerCase())) {
//             countVowels++;
//         }
//     }

//     return countVowels;

// }

// console.log("Total Vowels: " + countWovels("Amjad"));

// /*
// Optimizations made:

// allVowels is converted to a Set, which provides faster membership check with O(1) complexity. This is more efficient than using includes() on an array.
// The character is converted to lowercase once outside the loop, which eliminates the need to convert it repeatedly for each character. This improves performance.
// The variable name countWovels is corrected to countVowels to match the purpose of the function.
// With these optimizations, the code achieves a linear time complexity of O(n), where n is the length of the input string.

// */

// const countVowels = (input) => {
//     const allVowels = new Set(["a", "e", "i", "o", "u"]); // Use a Set for faster membership check
//     let countVowels = 0;

//     for (let i = 0; i < input.length; i++) {
//         const lowercaseChar = input[i].toLowerCase(); // Convert character to lowercase once

//         if (allVowels.has(lowercaseChar)) { // Use Set's has() method for O(1) lookup
//             countVowels++;
//         }
//     }

//     return countVowels;
// };

// console.log("Total Vowels: " + countVowels("Amjad"));

// // Q: 5 Write a function that checks if a given string is a palindrome

// /*
// reverse the string
// compare orignal and reverse string
// if both are same return true else return false
// */

// const isPalindrome = (input) => {
//     const reverseString = input?.split("").reverse().join("");

//     return reverseString === input;
// }

// console.log(isPalindrome("abba"));

// /**
//  * Optimizations made:

// Instead of creating a reversed string using split(), reverse(), and join(), the code directly compares characters from both ends of the input string.
// The loop only needs to iterate up to half of the string length because comparing beyond that point is redundant for palindrome checking.
// If a mismatch is found during the loop, it immediately returns false instead of completing the loop unnecessarily.
// With these optimizations, the code achieves a linear time complexity of O(n/2), which simplifies to O(n), where n is the length of the input string.
//  *
//  *
// */

// const isPalindrome = (input) => {
//     const length = input.length;
//     const halfLength = Math.floor(length / 2);

//     for (let i = 0; i < halfLength; i++) {
//         if (input[i] !== input[length - 1 - i]) { // Compare characters from both ends
//             return false; // If a mismatch is found, return false immediately
//         }
//     }

//     return true; // If no mismatches are found, it's a palindrome
// };

// console.log(isPalindrome("abba"));

// // Q: 6 Write a function that returns the length of the longest word in a sentence

// /**
//  * convert the words into array
//  * declare variable for lenth
//  * iterate the all words  and check if current word lenth is less than new word than update the word lenth variable
//  * return lastest word lenth and also word
//  *
//  */

// const isLongestWord = (input) => {
//     const toArray = input?.split(" ");
//     let maxWordLength = 0;
//     let maxWord = "";

//     for (let i = 0; i < toArray?.length; i++) {
//         if (toArray[i]?.length > maxWordLength) {
//             maxWordLength = toArray[i]?.length;
//             maxWord = toArray[i];
//         }

//     }

//     return { maxWordLength, maxWord };
// }

// console.log(isLongestWord("i am amjad saeed dsssssssss"))

// /**
// Optimizations made:

// Renamed the function from isLongestWord to findLongestWord to better reflect its purpose.
// Replaced the variable name toArray with words to provide better clarity.
// Removed the unnecessary optional chaining (?) for the split() method as it is guaranteed to be defined.
// Stored the length of each word in a separate variable (currentLength) instead of accessing it multiple times.
// Changed the variable names maxWordLength and maxWord to maxLength and longestWord, respectively, to better represent their purpose.
// With these optimizations, the code achieves a linear time complexity of O(n), where n is the length of the input sentence. It iterates over the words once, comparing the lengths and tracking the longest word.
//  *
//  */

// const findLongestWord = (input) => {
//     const words = input.split(" ");
//     let maxLength = 0;
//     let longestWord = "";

//     for (let i = 0; i < words.length; i++) {
//         const currentWord = words[i];
//         const currentLength = currentWord.length;

//         if (currentLength > maxLength) {
//             maxLength = currentLength;
//             longestWord = currentWord;
//         }
//     }

//     return { maxLength, longestWord };
// };

// console.log(findLongestWord("i am amjad saeed dsssssssss"));

// // Q: 7 Write a function that finds the first non-repeating character in a given string

// // psudo code

// // convert string to Array
// // add character with count in Object
// // find character from object wich have one one

// const isFirstNonRepeating = (input) => {
//     const toArray = input.split("");
//     const charactersTrack = {};

//     toArray.forEach((c) => {
//         if (charactersTrack.hasOwnProperty(c)) {
//             charactersTrack[c] += 1;
//         } else {
//             charactersTrack[c] = 1;
//         }
//     });

//     for (let i = 0; i < toArray.length; i++) {
//         const c = toArray[i];
//         if (charactersTrack[c] === 1) {
//             return c;
//         }
//     }

//     return null;
// };

// console.log(isFirstNonRepeating("aabccdeff"));

// /**Optimized version */

// const isFirstNonRepeating = (input) => {
//     const characterCount = new Map();

//     for (let i = 0; i < input.length; i++) {
//       const c = input[i];
//       const count = characterCount.get(c) || 0;
//       characterCount.set(c, count + 1);
//     }

//     for (let i = 0; i < input.length; i++) {
//       const c = input[i];
//       if (characterCount.get(c) === 1) {
//         return c;
//       }
//     }

//     return null;
//   };

//   console.log(isFirstNonRepeating("aabccdeff"));

//   In this optimized version, we use a Map data structure called characterCount to store the count of each character in the input string. By using a Map, we can avoid the hasOwnProperty check and directly retrieve the count of a character in O(1) time complexity.

// The optimized code still has a time complexity of O(n), but it eliminates the need to convert the input string to an array. Instead, it directly iterates over the characters of the input string using a simple for loop, reducing the overhead of creating an array.

// Note: This optimized code assumes that the input string contains only ASCII characters. If the input string can contain Unicode characters, the implementation may need to be adjusted to handle multi-byte characters correctly.

// // Q: 9 Write a function that checks if a given number is a perfect number

// // perfect number is in which sum of all its divisors is equal to the number exluding the itself

// // psduo code

// // loop on the number till input number
// // if number is divisible then store that number in a array
// // find the sum of aaray
// // if sum is eqal to original number then return true otherwise  return false

// const isPerfectNumber = (number) => {
//     const divisables = [];

//     for (let i = 0; i < number; i++) {
//         if (number % i === 0) {
//             divisables.push(i);
//         }

//     }

//     const result = sumOfArray(divisables);

//     return result === number;
// }

// const sumOfArray = (array) => {
//     let totalSum = 0;
//     for (let i = 0; i < array.length; i++) {
//         totalSum += array[i];
//     }
//     return totalSum;
// }

// console.log(isPerfectNumber(12));

// /**
//  * optimized version
//  *
//  */

// const isPerfectNumber = (number) => {
//     let sum = 0;

//     for (let i = 1; i <= number / 2; i++) {
//         if (number % i === 0) {
//             sum += i;
//         }
//     }

//     return sum === number;
// }

// console.log(isPerfectNumber(12));

// /**
//  * To optimize the time complexity of the code, we can make the following improvements:

// In the isPerfectNumber function, the loop should start from 1 instead of 0 since we don't need to check for divisibility by 0.
// The loop should run until number / 2 instead of number because any factor of number will not exceed number / 2.
// Instead of storing all the divisors in an array and then calculating their sum separately, we can calculate the sum directly while checking for divisibility.
//  */

// /**
//  * Q: Write a function that returns the minimum number of steps required to transform one string to another, where a step is defined as either adding, deleting or changing a character in the first string
//  *
//  *
//  * PSDUO CODE
//  * convert one string to array
//  * itertate another string and iinside that string find currenlt character in arrayString
//  * if found then increment else not
//  * return total count
//  *
//  */

// const minStepRequired = (string1, string2) => {
//     const toArray = string1.split("");
//     let steps = 0;

//     for (let i = 0; i < string2.length; i++) {
//         if (!(toArray.includes(string2[i]))) {
//             steps++
//         }
//     }

//     return "Total steps :" + steps;
// }
// console.log(minStepRequired("abc", "def"));

// /**
//  * Q: Write a function that checks if a given number is a Harshad number
//  *
//  * HARSHAD NUMBER IS THAT NUMBER WHICH IS DIVISABLE BY SUM OF NUMBERS
//  *
//  * PSUDO CODE
//  * split number into digits and store in array
//  * then find sum of array
//  * then divide sum with original number
//  * if remainder is zero then return  true else return false
//  *
//  */

// const isHarshad = (number) => {
//     const numberToDigits = number.toString().split('');
//     const realDigits = numberToDigits.map(Number);

//     const totalSum = sumOfArray(realDigits);

//     return number % totalSum == 0 ? true : false;
// }

// console.log(isHarshad(24));

// /**
//  * Q:Write a function that returns the number of ways to arrange n distinct objects in a circle
//  *
//  * psudo code
//  * simple use permuation concept of mathematics and find total ways
//  * we can find permuation with the help of factorial
//  */

// const countCircleArrangments = (n) => {
//     if (n <= 1) {
//         return 1;
//     }
//     else

//         return factorial(n);
// }

// console.log(countCircleArrangments(5))

// /**
//  * Q Write a function that checks if a given number is a narcissistic number
//  *
//  *
//  * A narcissistic number, also known as an Armstrong number, is a number that is equal to the sum of its own digits raised to the power of the number of digits. For example, 153 is a narcissistic number because 1^3 + 5^3 + 3^3 = 153.
//  *
//  * PSUDO CODE
//  *
//  * convert number into digits
//  * find the total lenth of numbers
//  * find the power of each digit with total lenth of numbers and repeat for all digits
//  * then sum the result of all digits
//  * if sum is equal to original value then retun true else false
//  *
//  */

// const isNarcissisticNumber = (number) => {
//     const toDigits = number.toString().split("");
//     const realDigits = toDigits.map(Number);
//     const digitsLength = realDigits.length;
//     let result = 0;
//     for (let i = 0; i < digitsLength; i++) {

//         result += Math.pow(realDigits[i], digitsLength);

//     }

//     return result === number;
// }

// console.log(isNarcissisticNumber(9474));

// /**
//  * Q: Write a function that returns the number of ways to split a given string into substrings such that each substring is a palindrome
//  *
//  * convert string to a array of character
//  * find subsets from array of characters
//  * then check each subset if it is palindrom then count else not count
//  * return count
//  *
//  */

// const isPalindrome = (string) => {
//     const length = string.length;
//     for (let i = 0; i < length / 2; i++) {
//         if (string[i] !== string[length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// };

// const countPalindromeSplits = (string) => {
//     const toArray = string.split("");
//     const subsets = findSubsets(toArray);
//     let count = 0;

//     for (let i = 0; i < subsets.length; i++) {
//         if (isPalindrome(subsets[i].join(""))) {
//             count++;
//         }
//     }

//     return count
// }

// console.log(countPalindromeSplits("aab"));

// const generateVariations = (attributes) => {
//     const keys = Object.keys(attributes);
//     const attributeOptions = keys.map((key) => attributes[key]);

//     const variations = generateCartesianProduct(...attributeOptions).map((combination, index) => {
//         const variation = {};
//         combination.forEach((option, i) => {
//             variation[keys[i]] = option;
//         });
//         return { [`variation${index + 1}`]: Object.values(variation).join("-") };
//     });

//     return variations;
// };

// const attributes = {
//     color: ["red", "blue"],
//     size: ["small", "medium"],
// };

// const variations = generateVariations(attributes);
// console.log(variations);

// /**
//  * Q: Write a function to determine whether two arrays contain the same elements.
//  *
//  *
//  * PSDUO CODE
//  *
//  * itertate one array and check value of iterated array in second array if value not found return false else return true
//  *
//  */

// const isSameArray = (a, b) => {
//     if (!(a.length == b.length)) {
//         return false;
//     }

//     for (let i = 0; i < a.length; i++) {
//         if (b.includes(a[i])) {
//             return true;
//         }
//         return false;
//     }

//     return true;
// }

// console.log(isSameArray([1, 2, 2], [1, 2]))

// /**
//  * Q: Write a function to merge two sorted arrays into a single sorted array.
//  * merge two array with spread operator applied
//  *
//  */

// const mergeArrays = (a, b) => {
//     const merged = [...a, ...b];

//     return merged;
// }

// console.log(mergeArrays([1, 2], [2, 3, 4]));

// /**
//  * Q: Write a function to find the kth largest element in an array.
//  *
//  * SORT THE ARRAY
//  * THE FIND THE NUMBER ON THE BASE OF INDEX
//  *
//  */

// const kLargestElement = (array, kth) => {
//     const sorted = array.sort((a, b) => a - b);

//     return sorted[sorted.length - kth];
// }

// console.log(kLargestElement([3, 1, 2], 3));

// /**
//  * Q: Write a function to find the intersection of two arrays
//  * SIMPLE APPLY FILTER AND GET THOSE VALUES WHICH ARE SAME IN BOTH ARRAYS
//  */

// const intersectionOfArrays = (a, b) => {

//     const findIntersection = b.filter(element => a.includes(element));
//     return findIntersection;
// }

// console.log(intersectionOfArrays([1, 2, 3], [1, 2, 3, 4]))

/**
 * Q: Write a function to find the longest common prefix of an array of strings
 *
 * Iteerate the each word from array
 * ieterate the every character of array in all words if match then push that chracter in variable
 * return that varibale
 *
 */

// const longestCommonPrefix = (array) => {
//     if (array.length === 0) {
//         return ""; // Return an empty string if the array is empty
//     }

//     const firstWord = array[0];
//     const longestCommonPrefix = [];

//     for (let i = 0; i < firstWord.length; i++) {
//         const char = firstWord[i];

//         for (let j = 1; j < array.length; j++) {
//             const word = array[j];

//             if (i >= word.length || word[i] !== char) {
//                 return longestCommonPrefix.join(""); // Return the common prefix found so far
//             }
//         }

//         longestCommonPrefix.push(char);
//     }

//     return longestCommonPrefix.join(""); // Return the common prefix found
// }

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));

// /**
//  * Q: Write a function to find the largest sum of any contiguous subarray in an array.
//  *
//  * PSDUO CODE
//  *
//  * declare cusrrent sum varibale to track the sum results
//  * use two loops , one will pick the starting number and second loop will ieterate throught the remaning numbers
//  * then find sum if current sum is great than prevous sum then update
//  * return the sum
//  */

// const findLargestSumSubarray = (array) => {
//     let currentSum = array[0];
//     let largestSum = array[0];

//     for (let i = 1; i < array.length; i++) {
//         currentSum = Math.max(array[i], currentSum + array[i]);
//         largestSum = Math.max(largestSum, currentSum);
//     }

//     return largestSum;
// }

// console.log(findLargestSumSubarray([1, -3, 2, 1, -1]));

// /**
//  * Q: How would you find the missing number in a given integer array of 1 to 100?
//  *
//  * PSUDO CODE
//  * interrate 1- 100
//  * if elemts doesnot include in array then push into misisng array
//  * return missing array
//  */

// const missingNumbers = (array) => {
//     const missingNumbers = [];
//     for (let i = 0; i < 20; i++) {
//         if (!(array.includes(i))) {
//             missingNumbers.push(i);
//         }
//     }

//     return missingNumbers
// }

// console.log(missingNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// /**
//  * Q: Write a function to check if two rectangles overlap
//  *
//  *
//  *
//  */

// function rotateArray(arr, positions, direction = 'right') {
//     const effectiveRotations = positions % arr.length; // Calculate the effective number of rotations

//     if (direction === 'right') {
//         // Right rotation
//         const rotatedArr = arr.slice(-effectiveRotations).concat(arr.slice(0, -effectiveRotations));
//         // Take the last `effectiveRotations` elements and concatenate them with the elements before those
//         return rotatedArr; // Return the rotated array
//     } else if (direction === 'left') {
//         // Left rotation
//         const rotatedArr = arr.slice(effectiveRotations).concat(arr.slice(0, effectiveRotations));
//         // Take the first `effectiveRotations` elements and concatenate them with the elements after those
//         return rotatedArr; // Return the rotated array
//     } else {
//         throw new Error("Invalid direction. Valid directions are 'right' and 'left'.");
//         // Throw an error if an invalid direction is provided
//     }
// }

// const myArray = [1, 2, 3, 4, 5];
// const rotated = rotateArray(myArray, 8, 'right');
// console.log(rotated);  // Output: [4, 5, 1, 2, 3]

// //   const rotated2 = rotateArray(myArray, 3, 'left');
// //   console.log(rotated2);  // Output: [4, 5, 1, 2, 3]

// /**
//  * Q: How would you find the longest substring without repeating characters in a given string?
//  *
//  *
//  * basically our goal is to find the longest substring without repeating characters in a given string which means we have to iterate the string untill we found repeating characters and if we found repeating character then we have to remove that part from string and that part will be longest substring but if we donot find repeating character the whole string is unique
//  *
//  *
//  * psudeo code
//  *
//  * convert the whole string to a array of charcaters
//  *
//  * then iterate the string and check the each character of string in array of charcaters
//  * if character donot found then store that character in variable else return the stored characters
//  *
//  */
// const longestSubstringWithoutRepeatingChars = (string) => {
//     const longestSubstring = [];
//     const visitedChars = new Set();

//     for (let i = 0; i < string.length; i++) {
//         if (!visitedChars.has(string[i])) {
//             longestSubstring.push(string[i]);
//             visitedChars.add(string[i]);
//         } else {
//             return longestSubstring.join("");
//         }
//     }

//     return longestSubstring.join("");
// }

// console.log(longestSubstringWithoutRepeatingChars("aab"));
