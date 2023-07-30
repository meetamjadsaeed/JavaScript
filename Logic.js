"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }




// var _ReUsable = require("./ReUsable.js");

var { ReUsable } = require("./ReUsable.js");














// var generateVariations = function generateVariations(attributes) {
//     var _ReUsable$ReUsable;
//     var keys = Object.keys(attributes);
//     var attributeOptions = keys.map(function (key) {
//         return attributes[key];
//     });
//     var variations = (_ReUsable$ReUsable = _ReUsable.ReUsable).generateCartesianProduct.apply(_ReUsable$ReUsable, _toConsumableArray(attributeOptions)).map(function (combination, index) {
//         var variation = {};
//         combination.forEach(function (option, i) {
//             variation[keys[i]] = option;
//         });
//         return _defineProperty({}, "variation".concat(index + 1), Object.values(variation).join("-"));
//     });
//     return variations;
// };
// var attributes = {
//     color: ["red", "blue"],
//     size: ["small", "medium"],
//     measure: ["10cm", "20cm"]
// };
// var variations = generateVariations(attributes);
// console.log(variations);







// const generateVariations = (attributes) => {
//     const keys = Object.keys(attributes);
//     const attributeOptions = keys.map((key) => attributes[key]);

//     const variations = ReUsable.generateCartesianProduct(...attributeOptions).map((combination, index) => {
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
//  * QUESTION OF DSA planning LinkedIn Doc
//  */

// /**
//  * Q:01
//  */

// const reverseInput = (input) => {
//     const stack = ReUsable.createStack();
//     const reversed = [];


//     for (let i = 0; i < input.length; i++) {
//         stack.push(input[i]);
//     }



//     while (!stack.isEmpty()) {
//         reversed.push(stack.pop());
//     }

//     return reversed;
// }

// console.log(reverseInput([1, 2, 3, 5, 5]));

/**
 * Q:02
 */



// const kthSmallestElement = (input, k) => {
//     return ReUsable.quickSelect(input, 0, input.length - 1, k - 1);
// }

// console.log(kthSmallestElement([7, 10, 4, 3, 20, 15], 3));


/**
 * Q:03
 */

// const maxSubarraySum = (arr) => {

//     const maxSum = ReUsable.kadaneAlgorithm(arr, "product")

//     return maxSum;


// }

// console.log(maxSubarraySum([1, -3, 2, 1, -1]));








/***
 *
 *
 *
 *
 * ARRAY PROBLEMS
 *
 *
 *
 *
 */



// /**
//  Q:1 Reverse the array (nife approach).
//  use build im method reverse pf javascript / reverse the lements of array
//  */

// /**
// Q:1 Reverse the array (optimized approach approach).
// use stack
// push the all elements
// pop the the elements untill stack is empty because stack follows LIFO so you will get the reversed array
// */

// const reverseArray = (array) => {
//     const stack = ReUsable.createStack();
//     const result = []; //
//     for (let i = 0; i < array.length; i++) {
//         stack.push(array[i]);
//     }

//     while (!(stack.isEmpty())) {
//         result.push(stack.pop());

//     }
//     return result
// }

// console.log(reverseArray([1, 2, 3, 5, 6, 7]))



/**
 Q:Maximum and Minimum in an array.
 (nife approach)
 sort the array in ascending order
 return first elemnt as minimum
 return last elemnt as maximum



 optimized approach
another approach is that pick first element as min element
itertate the whole array
check if current element is less than selected min element
 reset the min
 last, return min

 do same for max

 optimized approach
 if we need to implement data structure then we can use heap

 use min-heap for min element
 use max heap for max element



*/

// const minElementFromArray = (array) => {
//     const heap = ReUsable.createMinHeap();
//     array.forEach((element) => heap.insert(element));
//     return heap.extractMin();

// }
// console.log(minElementFromArray([1, 2, 5, 8, 32, 6, 7]))


// const maxElementFromArray = (array) => {

//     const heap = ReUsable.createMaxHeap();
//     array.forEach((element) => heap.insert(element));
//     return heap.extractMax();
// }
// console.log(maxElementFromArray([1, 2, 5, 8, 32, 6, 7]))



// /**
//  * Kth Max and Min in an array
//  * 
//  * nife approach 
//  * sort the elements 
//  * find the element with index from end if goal is to find the max element and from start if goal is to find the min element
//  * 
//  * oprimize approach
//  * use QuickSelect
//  * 
//  * 
//  */

// const kthMinElement = (array, index) => {
//     const quickSelect = ReUsable.quickSelect(array, 0, array.length - 1, index);

//     return quickSelect;
// }
// console.log(kthMinElement([1, 4, 7, 9, 3, 2, 46, 78, 8], 6))





// /**
//  * Sort an array which consists of only 0s, 1s and 2s
//  *  
//  * Psudeodo Code
//  * use simple sorting 
//  * 
//  * 
//  * 
//  * optimize approach 
//  * use Dutch National Flag tacnic 
//  */

// const sortArray = (array) => {
//     const dutchNationalFlag = ReUsable.dutchNationalFlag(array);

//     return dutchNationalFlag
// }

// console.log(sortArray([0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1]))





// /**
//  * 
//  * Move all negative elements to one side of the array.
//  * 
//  * psudeo code 
//  * simply sort the elemnts 
//  * 
//  * 
//  * opimze approach
//  * use dutchNationalFlag tacnic
//  * 
//  */


// const moveNegativeElements = (array) => {
//     const dutchNationalFlag = ReUsable.dutchNationalFlag(array);

//     return dutchNationalFlag
// }

// console.log(moveNegativeElements([-12, 11, -13, -5, 6, -7, 5, -3, -6]))



/**
 * Find Union and Intersection of two sorted arrays.
 *
 * psedudo approach
 *      Union:
 *          concante both array (simply use concat method the filter the duplicates)
 *
 *
 *      Intersection:
 *          extract those elemnt which are same in both array
 *          ieterate the array one
 *          check elemnt from one array to another
 *          if found then add to result else not
 *
 * Optimize Aproach
 *       Union:
 *          Use set
 *
 *       Intersection:
 *          Use set
 *
 *
 *
 */


// const unionSet = (a, b) => {

//     return  a.concat(b);
// }

// console.log(unionSet([1, 2, 3], [1, 2, 3]))

// const IntersectionSet = (a, b) => {

//     const result = [];

//     for (let i = 0; i < b.length; i++) {
//         if (a.includes(b[i])) {
//             result.push(b[i]);
//         }
//     }

//     return result;
// }

// console.log(IntersectionSet([1, 2, 3], [1, 2, 3, 4]))


// const unionSet = (a, b) => {
//     const set = new Set(a);
//     for (const element of b) {
//         set.add(element);
//     }
//     return Array.from(set);
// };

// console.log(unionSet([1, 2, 3], [1, 2, 3]));

// const intersectionSet = (a, b) => {
//     const setA = new Set(a);
//     const intersection = [];

//     for (const element of b) {
//         if (setA.has(element)) {
//             intersection.push(element);
//         }
//     }

//     return intersection;
// };

// console.log(intersectionSet([1, 2, 3], [1, 2, 3, 4]));



/**
 *
 * Rotate an array cyclically by one.
 *
 * pseudo code
 *      store last elemnt
 *      remove last elemnt
 *      add last elemnt in begining
 *      return array
 *
 *
 * optimze approach
 *      use doubly linked list
 *
 */


// const cyclicallyByOne = (array) => {
//     const lastEelement = array[array.length - 1];
//     array.pop();
//     array.unshift(lastEelement);
//     return array;
// }
// console.log(cyclicallyByOne([1, 2, 3, 4, 5]))


// const cyclicallyByOne = (array) => {
//     const doublyLinkedList = ReUsable.createDoublyLinkedList();

//     for (let i = array.length - 1; i >= 0; i--) {
//         doublyLinkedList.addToHead(array[i]);
//     }

//     const result = [];

//     while (!doublyLinkedList.isEmpty()) {
//         result.push(doublyLinkedList.removeFromTail());
//     }

//     return result;

// }
// console.log(cyclicallyByOne([1, 2, 3, 4, 5]))



/**
 *
 * Minimize the maximum difference between heights
 *
 *
 * psudo code
 * first sort the all element
 * find intial minHeight, maxHeight and ans
 * find minHeight at every index
 * find maxheight evey index
 * then find ans with maxheight - minHeight and check if answer is greater than initila answer than swap the values else not
 * repeat that process for all elements
 *
 *
 *
 * optimze appraoch
 * use MinMax Heap
 *
 *
 *
 */



// function getMinDiff(arr, n, k) {
//     arr.sort((a, b) => a - b);


//     let tempmin = arr[0];
//     let tempmax = arr[n - 1];

//     // Maximum possible height difference
//     let ans = arr[n - 1] - arr[0];



//     for (let i = 1; i < n; i++) {
//         // If on subtracting k we got negative, then continue
//         if (arr[i] - k < 0) {
//             continue;
//         }

//         // Minimum element when we add k to the whole array
//         tempmin = Math.min(arr[0] + k, arr[i] - k);

//         // Maximum element when we subtract k from the whole array
//         tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k);

//         ans = Math.min(ans, tempmax - tempmin);
//     }

//     return ans;
// }

// const arr = [1, 15, 10];
// const n = arr.length;
// const k = 6;

// console.log(getMinDiff(arr, n, k));



// const getMinDiff = (arr, n, k) => {

//     const heap = ReUsable.createMinMaxHeap();


//     for (let i = 0; i < n; i++) {
//         heap.insert(arr[i]);
//     }

//     let ans = heap.getMax() - heap.getMin();

//     while (heap.getMin() !== Infinity) {
//         const minValue = heap.getMin();
//         const maxValue = heap.getMax();

//         if (maxValue - minValue < ans)
//             ans = maxValue - minValue;

//         if (minValue + k <= maxValue)
//             heap.remove(minValue);
//         else
//             break;
//     }

//     return ans;

// }
// const arr = [1, 15, 10];
// const n = arr.length;
// const k = 6;
// console.log(getMinDiff(arr, n, k));























/**
 *
 * these problems need to convert into DSA
 *
 */








/**
 * Minimum number of jumps to reach an end of an array
 *
 */

/**
 * Find the duplicate in an array of N+1 integers
 *
 *  psdeudo code
 *
 * iterate the array
 * check in result array if elemnt is already avilable it means it is duplicate then push in duplicates
 * return duplicates
 *
 */

// const duplicatesInArray = (array) => {
//     const result = [];
//     const duplicates = [];

//     for (let i = 0; i < array.length; i++) {
//         if (result.includes(array[i])) {
//             duplicates.push(array[i]);
//         }
//         else {
//             result.push(array[i]);
//         }
//     }

//     return duplicates;
// }



// console.log(duplicatesInArray([1, 3, 4, 2, 2, 3]))


/**
 * count Inversion
 *
 * pseudo code
 * Traverse through the array from start to end
 * For every element, find the count of elements smaller than the current number up to that index using another loop.
 * Sum up the count of inversion for every index.
 * Print the count of inversions.
 *
 */

// const countInversion = (array) => {
//     let count = 0;
//     for (let index = 0; index < array.length; index++) {


//         for (let j = index + 1; j < array.length; j++) {

//             if (array[j] < array[index]) {
//                 count++;
//             }


//         }

//     }

//     return count
// }

// console.log(countInversion([1, 20, 6, 4, 5]))


/**
 * best time to buy or sell stock
 *
 *
 * psuedo code
 *
 *
 * first check if array is not in ascending order then continue to solve else return false
 *  we have array of price so first our goal is to find the lowest price
 * then we have to find the highest price after the lowest price
 *
 * subtract the highest price from the lowest price to calculate the maximum profit and return profit
 *
 *
 */


// const maxProfit = (prices) => {

//     const checkArrayOrder = ReUsable.checkArrayOrder(prices);

//     if (checkArrayOrder !== "Descending") {
//         let buy = prices[0];
//         let maxProfit = 0;

//         for (let index = 0; index < prices.length; index++) {

//             if (buy > prices[index]) {
//                 buy = prices[index];
//             }
//             else if (prices[index] - buy > maxProfit) {
//                 maxProfit = prices[index] - buy;
//             }

//         }

//         return maxProfit;

//     }

//     else {
//         return "cant resolve because lowest price is last price"
//     }


// }
// console.log(maxProfit([7, 1, 5, 3, 6, 4]))






/***
 *
 * Find common elements in 3 sorted arrays.
 *
 *  *Intersection:
 * -        first check if all array have same length then continue the problem else return false
 *          first merge the array and and array three then continue the problem
 *          extract those elemnt which are same in both array
 *          ieterate the array one
 *          check elemnt from one array to another
 *          if found then add to result else not
 *
 */


// const findCommon = (array1, array2, array3) => {

//     const merged = array2.concat(array3);

//     const result = [];

//     for (let i = 0; i < merged.length; i++) {
//         if (array1.includes(merged[i])) {
//             result.push(merged[i]);
//         }
//     }

//     return [...new Set(result)];
// }

// console.log(findCommon([1, 5, 5], [3, 4, 5, 5, 10], [5, 5, 10, 20]))



/***
 * find if there is any subarray with sum equal to 0.

 * simple use inner loop concept
 *
 */


// const subArrayExists = (array) => {

//     let sum = 0;

//     for (let i = 0; i < array.length; i++) {

//         // this snippet is checking if array contain zero element 
//         let sum = array[i];
//         if (sum == 0) {
//             return true;
//         }
//         // 

//         for (let j = i + 1; j < array.length; j++) {
//             sum += array[j];
//             if (sum == 0) {
//                 return true;
//             }
//         }

//     }

//     return false;


// }

// console.log(subArrayExists([-3, 2, 3, 1, 6]));



/**
 * find longest consecutive subsequence.
 *
 *
 * psedo code
 *
 * first sort the array
 * the find unique values
 * check differnce in number  if differnce is same then push that elemnt in the result array and if differnce is differnt then  return false
 *
*/


// const findLongestConseqSubseq = (array) => {
//     const sorted = array.sort((a, b) => a - b);
//     const unique = [...new Set(sorted)];
//     let initialDifference = unique[1] - unique[0];
//     let currentStreak = 1;
//     let longestStreak = 1;

//     for (let index = 1; index < unique.length; index++) {
//         const difference = unique[index] - unique[index - 1];

//         if (difference === initialDifference) {
//             currentStreak++;
//         } else {
//             initialDifference = difference;
//             currentStreak = 1;
//         }

//         longestStreak = Math.max(longestStreak, currentStreak);
//     }

//     return longestStreak;
// }

// console.log(findLongestConseqSubseq([36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42]));



/**
 * Given an array of size n and a number k, find all elements that appear more than "N/K" times.
 *
 *
 *
 *
 * first find the number
 * then itertae the whole array
 *     check if currentNumber is equal to target number then increment else not
 *
 *
 */


// const morethanNbyK = (array, k) => {

//     const targetNumber = parseInt(array.length / k);
//     const stack = {};
//     let result = [];

//     for (let index = 0; index < array.length; index++) {
//         if (array[index] > targetNumber) {
//             result.push(array[index]);
//         }

//     }

//     for (let i = 0; i < result.length; i++) {
//         if (stack[result[i]]) {
//             stack[result[i]] += 1;
//         }

//         else {
//             stack[result[i]] = 1;
//         }

//     }


//     return stack;

// }

// console.log(morethanNbyK([9, 8, 7, 9, 2, 9, 7], 3))



/**
 * max profit by buying and selling a share atmost twice a year
 *
 *
 */

// const maxTwoBuySell = (array) => {
//     var first_buy = -1000;
//     var first_sell = 0;
//     var second_buy = -1000;
//     var second_sell = 0;

//     for (var i = 0; i < array.length; i++) {

//         first_buy = Math.max(first_buy, -array[i]);
//         first_sell = Math.max(first_sell, first_buy + array[i]);
//         second_buy = Math.max(second_buy, first_sell - array[i]);
//         second_sell = Math.max(second_sell, second_buy + array[i]);

//     }
//     return second_sell;
// }

// console.log(maxTwoBuySell([10, 22, 5, 75, 65, 80]))



/**
 *
 * Find whether an array is subset of another array
 *
 * psdueo code
 *
 * iterate array 2 the search elemnt of array 2 in array1 if all elemnts match then return true else false
 *
 *
 */


// const isSubset = (array1, array2) => {
//     for (let index = 0; index < array2.length; index++) {
//         if (!(array1.includes(array2[index]))) {
//             return false;
//         }

//     }
//     return true
// }

// console.log(isSubset([10, 5, 2, 23, 19], [19, 5, 3]))


/***
 *
 * Trapping Rain Water
 *
 *
 * pseudo code
 *
 * Traverse the array from start to end:
 * For every element:
 * Traverse the array from start to that index and find the maximum height (a) and
 * Traverse the array from the current index to the end, and find the maximum height (b).
 * The amount of water that will be stored in this column is min(a,b) – array[i], add this value to the total amount of water stored
 * Print the total amount of water stored.
 *
 *
 */



// const maxWater = (arr, n) => {
//     // To store the maximum water that can be stored
//     let res = 0;

//     // For every element of the array except first and last element
//     for (let i = 1; i < n - 1; i++) {

//         // Find the maximum element on its left
//         let left = arr[i];
//         for (let j = 0; j < i; j++) {
//             left = Math.max(left, arr[j]);
//         }

//         // Find the maximum element on its right
//         let right = arr[i];
//         for (let j = i + 1; j < n; j++) {
//             right = Math.max(right, arr[j]);
//         }

//         // Update maximum water value
//         res += Math.min(left, right) - arr[i];
//     }
//     return res;
// };

// let arr = [2, 0, 2];
// let n = arr.length;

// console.log(maxWater(arr, n))


/****
 *
 * Median of 2 sorted 2 arrays of equal size.
 *
 */



// const findMedian = (arr1, arr2) => {
//     // Merge the arrays
//     const mergedArray = arr1.concat(arr2);

//     // Sort the merged array
//     mergedArray.sort((a, b) => a - b);

//     // Calculate the median
//     const length = mergedArray.length;
//     const middleIndex = Math.floor(length / 2);

//     if (length % 2 === 0) {
//         // If the merged array has an even length, average the middle two elements
//         return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
//     } else {
//         // If the merged array has an odd length, return the middle element
//         return mergedArray[middleIndex];
//     }
// }

// // Example usage
// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6];
// const median = findMedian(array1, array2);
// console.log(median); // Output: 3.5



/**
 *
 * Min swaps required bring elements less equal to K together.
 *
 *
 * Naive Approach: A simple solution is to first count all elements less than or equal to k(say ‘good’). Now traverse for every sub-array and swap those elements whose value is greater than k. The time complexity of this approach is O(n2)
 *
 */



/**
 *
 * Chocolate Distribution Problem
 *
 * psuedo code
 *
 * The idea is to generate all subsets of size m of arr[0..n-1]. For every subset, find the difference between the maximum and minimum elements in it. Finally, return the minimum difference.
 *
 *
 *
 */


// Function to generate all subsets of size m
// function generateSubsetsOfSizeM(arr, m) {
//     const subsets = [];
//     generateSubsetsHelper(arr, m, 0, [], subsets);
//     return subsets;
// }

// function generateSubsetsHelper(arr, m, start, subset, subsets) {
//     if (subset.length === m) {
//         subsets.push(subset.slice()); // Add a copy of the subset to subsets
//         return;
//     }

//     for (let i = start; i < arr.length; i++) {
//         subset.push(arr[i]);
//         generateSubsetsHelper(arr, m, i + 1, subset, subsets);
//         subset.pop();
//     }
// }

// // Naive approach for Chocolate Distribution Problem
// function minDifference(arr, m) {
//     const subsets = generateSubsetsOfSizeM(arr, m);
//     let minDiff = Infinity;

//     for (let subset of subsets) {
//         const diff = Math.max(...subset) - Math.min(...subset);
//         minDiff = Math.min(minDiff, diff);
//     }

//     return minDiff;
// }

// // Example usage
// const arr = [7, 3, 2, 4, 9, 12, 56];
// const m = 3;
// const result = minDifference(arr, m);
// console.log('Minimum difference:', result);


// The generateSubsetsOfSizeM function generates all subsets of size m using a recursive helper function generateSubsetsHelper. It takes an array arr, the desired subset size m, a start index to track the current element, a subset array to store the current subset, and the subsets array to store all generated subsets.

// The minDifference function implements the naive approach for the Chocolate Distribution Problem. It uses the generateSubsetsOfSizeM function to generate all subsets of size m from the given array arr. It then calculates the difference between the maximum and minimum elements for each subset and keeps track of the minimum difference found.

// In the example usage, it calculates the minimum difference for the array [3, 4, 1, 9, 56, 7, 9, 12] with a subset size of 5 and logs the result to the console.



/**
 * Find Duplicate characters in a string.
 *
 * pseudo code
 *
 * convert string to array of characters
 *
 * then add array in key pair object
 *
 * iterate the object if value is more than 1 than found duplicate
 */


// const duplicateCharacters = (str) => {
//     const arrayOfCharacters = str.split("");
//     const trackCharacters = {};
//     const duplicates = [];
//     for (let i = 0; i < arrayOfCharacters.length; i++) {
//         if (trackCharacters[arrayOfCharacters[i]]) {
//             trackCharacters[arrayOfCharacters[i]] += 1;
//         }
//         else {
//             trackCharacters[arrayOfCharacters[i]] = 1;
//         }
//     }

//     for (let i = 0; i < arrayOfCharacters.length; i++) {
//         if (trackCharacters[arrayOfCharacters[i]] > 1) {
//             duplicates.push(arrayOfCharacters[i]);
//         }

//     }


//     return [...new Set(duplicates)]
// }

// console.log(duplicateCharacters("firstt nnamee ss"))




/**
 *
 * Split the Binary string into two substring with equal 0’s and 1’s
 *
 * declare variable for 0's
 * declare variable for 1's
 * declare variable for count
 *
 * iterate the string
 *  if it contains 0 then increment the variable 0's
 *  if it contains 1 then increment the variable 1's
 *
 * then check if variable 0 is equal to variable 1 then increment the variable count
 *
 */



// const maxSubStr = (str) => {
//     let count0 = 0;
//     let count1 = 0;
//     let count = 0;

//     for (let index = 0; index < str.length; index++) {

//         if (str[index] == 0) {
//             count0++;
//         }
//         else {
//             count1++;
//         }

//         if (count0 == count1) {
//             count++;
//         }

//     }

//     return count;

// }

// console.log(maxSubStr("0000000000"))



/**
 *
 * Word Wrap Problem.
 *
 * split the words as per given widhth(characters)
 *
 * count++ on every iteration if count === width then break line and reset the count
 * repeat the process on whole senetence
 *
 */

// const solveWordWrapUtil = (sentence, width) => {
//     let count = 0;
//     let result = [];

//     for (let index = 0; index < sentence.length; index++) {
//         count++;

//         if (count === width) {
//             result.push(sentence[index] + ' \n');
//             count = 0;
//         } else {
//             result.push(sentence[index]);
//         }
//     }

//     return result.join("");
// }

// console.log(solveWordWrapUtil("Geeks for Geeks presents word wrap problem", 15));


/**
 *
 * EDIT Distance.
 *
 *
 * iterate one string and check if both have the the same character then push that character in array
 * remove those characters from str1 then check the length of str and return length
 *
 */


// const levenshteinDistance = (str1, str2) => {
//     const m = str1.length;
//     const n = str2.length;

//     // Create a 2D array to store the distances
//     const dp = Array(m + 1)
//         .fill(null)
//         .map(() => Array(n + 1).fill(0));

//     // Initialize the first row and column of the array
//     for (let i = 0; i <= m; i++) {
//         dp[i][0] = i;
//     }

//     for (let j = 0; j <= n; j++) {
//         dp[0][j] = j;
//     }

//     // Fill in the rest of the array
//     for (let i = 1; i <= m; i++) {
//         for (let j = 1; j <= n; j++) {
//             if (str1[i - 1] === str2[j - 1]) {
//                 dp[i][j] = dp[i - 1][j - 1];
//             } else {
//                 dp[i][j] = Math.min(
//                     dp[i - 1][j] + 1, // deletion
//                     dp[i][j - 1] + 1, // insertion
//                     dp[i - 1][j - 1] + 1 // substitution
//                 );
//             }
//         }
//     }

//     return dp[m][n];
// };

// const str1 = "sunday";
// const str2 = "saturday";
// const distance = levenshteinDistance(str1, str2);
// console.log(distance);




/**
 * find next greater number with same set of digits
 *
 * convert string to array of numbers
 * traverse the array and keep traversing till you find a digit which is smaller than the previously traversed digit.
 * save the digit in variable
 * remove remaining part
 * sort remaning part
 * find min elemnt from remaning part
 * replace stored digit with min
 * merge both parts
 *
 *
 *
 */


// const findNext = (digits) => {
//     const digitsToArray = digits.split("");

//     let prev = digitsToArray[digitsToArray.length - 1];
//     let current;
//     let next;

//     for (let index = digitsToArray.length - 1; index >= 0; index--) {
//         current = digitsToArray[index];

//         if (current < prev) {
//             next = current;

//             const remainingPart = digitsToArray.slice(index + 1);
//             const sortRemainingPart = remainingPart.sort((a, b) => a - b);
//             digitsToArray[index] = sortRemainingPart[0];

//             sortRemainingPart[0] = next;

//             return (
//                 digitsToArray.slice(0, index + 1).concat(sortRemainingPart).join("")
//             );
//         } else {
//             prev = current;
//         }
//     }

//     return null; // Return null if no digit is smaller than its next digit
// };

// console.log(findNext("534976"));



/**
 *
 * Balanced Parenthesis problem.
 *
 *
 * push the all bracket in stack
 * remove bracket from stack and comapre if they are not same then return false els etrue
 *
 *
 */



// const areBracketsBalanced = (brackets) => {
//     const stack = [];
//     const bracketPairs = {
//         "{": "}",
//         "(": ")",
//         "[": "]",
//     }

//     for (let index = 0; index < brackets.length; index++) {
//         const currentBracket = brackets[index];

//         if (bracketPairs[currentBracket]) {
//             // If it's an opening bracket, push it to the stack
//             stack.push(currentBracket);
//         } else {
//             // If it's a closing bracket, check if it matches the last opening bracket
//             const lastOpeningBracket = stack.pop();
//             if (currentBracket !== bracketPairs[lastOpeningBracket]) {
//                 // If it doesn't match, brackets are not balanced
//                 return false;
//             }
//         }
//     }

//     // If the stack is empty, all brackets were matched, and they are balanced
//     return stack.length === 0;
// }

// console.log(areBracketsBalanced("(){}")); // Output: true



/**
 *
 * Word Break Problem | DP-32
 *
 * create object of ditionary and set the prediefined values
 *
 * simpley use recursion and check on the basis of prefix and suffix
 *
 */


// const wordBreak = (str) => {
//     // base case
//     if (str.length === 0)
//         return true;

//     const dictionary = new Set();

//     const tempDictionary = ["i", "like", "sam", "sung", "samsung", "mobile", "ice", "cream", "man", "go", "mango"];

//     tempDictionary.forEach(element => {
//         dictionary.add(element);
//     });

//     for (let index = 1; index <= str.length; index++) {
//         if (dictionary.has(str.substring(0, index)) && wordBreak(str.substring(index, str.length))) {
//             return true;
//         }
//     }

//     return false;
// }

// console.log(wordBreak("ilike"));



/***
 * Recursively remove all adjacent duplicates
 *
 * use recursion
 *
 *
 * ieterate the string
 * on each iteration check if current second character is equal to first character
 *      if yes then skip that iteration
 *          make boolean to true
 *      else
 *          add that character to result
 *
 * we need to apply on whole string
 *
 * so out of iteration check if boolean value is true then pass the output again to function else return output
 *
 */


// const removeAdjacentDuplicates = (str) => {
//     let output = ""
//     let isRem = false;

//     for (let index = 0; index < str.length; index++) {
//         if (str[index] === str[index + 1]) {
//             isRem = true;
//             index++;
//         }
//         else {
//             output += str[index]
//         }

//     }

//     if (isRem) {
//         return removeAdjacentDuplicates(output)
//     }
//     else {
//         return output
//     }


// }
// console.log(removeAdjacentDuplicates("geeksforgeeg"))


/***
 * maximum subsequence sum such that no three are consecutive
 *
 * Our goal is to the sum of all numbers but after numbers cant be sum in order of 3 for example there are numbers 1 2 3 4 so we need to add 1+2+4 not 3 because 3 is has third order
 *
 * check if array length is 0 the return 0
 * if length is 1 then return array[0]
 * if length is 2 then return array[0]+array[1]
 *
 * else
 *
 *  initialize initial current sum  = arr[0] + arr[1] + arr[2]; // Sum of the first three elements
 *  initialize initial prevousSum = array[0]
 * initialize initial twoElementsBackSum = array[0]+array[1]
 *
 * iterate the whole array
 *      find maximum from prevousSum and twoElementsBackSum
 *      exchange values
 *              twoElementsBackSum = prevousSum
 *              prevousSum = sum
 *              sum =  maximum
 *
 * return sum
 */



// const maxSumWO3Consec = (array) => {
//     if (array.length === 0) return 0;
//     if (array.length === 1) return array[0];
//     if (array.length === 2) return array[0] + array[1];

//     let sum = array[0] + array[1] + array[2]; // Sum of the first three elements
//     let prevSum = array[0]; // Sum of the previous two elements
//     let twoElementsBackSum = array[1] + array[0]; // Sum of two elements back

//     for (let index = 3; index < array.length; index++) {
//         // Calculate the maximum sum ending at index i
//         let currentSum = Math.max(prevSum, twoElementsBackSum) + array[index];

//         twoElementsBackSum = prevSum;
//         prevSum = sum;
//         sum = currentSum;
//     }

//     // The maximum subsequence sum will be the maximum value between sum and prevSum
//     return Math.max(sum, prevSum);
// };

// // Example usage:
// console.log(maxSumWO3Consec([3, 2, 7, 10])); // Output: 13 (maximum subsequence sum: 3 + 7 + 3)



/****
 * maximum Length Chain of Pairs.
 *
 * initilize ans and prev value  = 0
 *
 * iterate the array
 *      check if current is greater than prev
 *          increment the sum
 *              exchange
 *
 *
 *
 */

// function findLongestChain(pairs) {
//   // Sort the pairs based on the first element
//   pairs.sort((a, b) => a[0] - b[0]);

//   const n = pairs.length;
//   const dp = new Array(n).fill(1);

//   for (let i = 1; i < n; i++) {
//     for (let j = 0; j < i; j++) {
//       if (pairs[j][1] < pairs[i][0]) {
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//   }

//   return Math.max(...dp);
// }

// // Example usage:
// const pairs = [[1, 2], [2, 3], [3, 4]];
// console.log(findLongestChain(pairs)); // Output: 2


/****
 *
 * Maximum sum of pairs with specific difference.
 *
 * first sort the array in ascending order
 * initialize the left to start from left
 * initilize the right to start from right
 * initilially both left and right will be start from 0
 * initilize the maxSum to track the max sum
 * iterate the sorted array untill right is less than total sorted array lenth
 *      calculate the difference between the left and right
 *      Calculate the difference diff = nums[right] - nums[left].
If diff == k, you found a valid pair. Update maxSum with the sum of the current pair (nums[right] + nums[left]).
If diff < k, move right pointer one step to the right to potentially find a larger difference.
If diff > k, move left pointer one step to the right to potentially find a smaller difference.
If left and right are equal, move right one step to the right to avoid considering the same element as both a and b.
Return maxSum as the result.
 *
 */

// const maxSumPairWithDifferenceLessThanK = (array, k) => {

//     const sorted = array.sort((a, b) => a - b);

//     let left = 0;
//     let right = 0;
//     let maxSum = 0;

//     for (let index = 0; right < sorted.length; index++) {
//         let diff = sorted[right] - sorted[left];

//         if (diff == k) {
//             maxSum = Math.max(maxSum, sorted[right] + sorted[left]);
//             left++;
//             right++;
//         }

//         if (diff < k) {
//             right++;
//         }

//         if (diff > k) {
//             left++;
//         }

//         if (left == right) {
//             right++;
//         }

//     }

//     return maxSum;

// }

// console.log(maxSumPairWithDifferenceLessThanK([1, 3, 5, 7, 9], 2))


/***
 *
 * Count number of ways to reach a given score in a game
 *
 * Input: n = 20
 * Output: 4
 * Explanation: There are following 4 ways to reach 20: (10, 10), (5, 5, 10), (5, 5, 5, 5), (3, 3, 3, 3, 3, 5)
 *
 *
 * iterate the loop untill target
 *  initilialize the result array
 *  initliaze the current pair array ( which will lead to sum of k)
 *  in loop check if previous elemt
 *
 */



// const countWaysToReachScore = (target) => {
//     let result = [];

//     for (let i = 0; i < target; i++) {
//         for (let j = i; i < target; j++) {
//             if (i + j === target) {
//                 result.push(i, j)
//             }

//         }

//     }

//     return target

// }

// console.log(countWaysToReachScore(20))


/****
 * check if two string are anagram without using sorting
 *
 *
 * psuedo code
 *
 * first check if length is not equal of both strings the return false
 *      first track the count of frist string with key pair
 *      do same for string
 *
 *          then iterate the any string and compare if both string have same count then return true else false
 *
 */


// const isAanagram = (s1, s2) => {
//     if (s1.length !== s2.length) return false;

//     let s1Stack = {};
//     let s2Stack = {};

//     for (let index = 0; index < s1.length; index++) {
//         if (s1Stack[s1[index]] || s2Stack[s2[index]]) {
//             s1Stack[s1[index]] += 1;
//             s2Stack[s2[index]] += 1;

//         }
//         else {
//             s1Stack[s1[index]] = 1;
//             s2Stack[s2[index]] = 1;

//         }

//     }

//     for (let index = 0; index < s1.length; index++) {
//         if (s1Stack[s1[index]] !== s2Stack[s1[index]]) {
//             return false;
//         }

//     }

//     return true;


// }


// console.log(isAanagram("gram", "armm"))




/****
 *
 * Count number of ways to reach a given score in a game
 *
 * create a array with name table with lenth of orginal array
 *
 *
 *
 */

// const countWaysToReachScore = (scores, targetScore) => {
//     // const table = new Array(targetScore + 1).fill(0);

//     // // Base case (If given value is 0)
//     // table[0] = 1;


//     // scores.map((score, index) => {
//     //     for (let i = score; i <= targetScore; i++)
//     //         table[i] += table[i - score];

//     // })

//     // let currentNumber = 5;
//     let second = 10;
//     let way = 0;

//     scores.map((score, index) => {
//         let currentNumber = score;
//         while (currentNumber != targetScore) {
//             currentNumber++;

//             if (currentNumber === targetScore) {
//                 way++;
//             }
//         }

//         for (let i = 0; i < scores.length; i++) {
//             for (let j = 0; j < scores.length; j++) {

//                 let sum = scores[i] + scores[j];
//                 while (sum != targetScore) {

//                     if (sum === targetScore) {
//                         way++;
//                     }
//                 }

//             }

//         }

//     })


//     // while (second != targetScore) {
//     //     second++;

//     //     if (second === targetScore) {
//     //         way++;
//     //     }
//     // }


//     return way;


//     // return table;
// }

// const targetScore = 20
// const possibleScores = [5, 10]

// console.log(countWaysToReachScore(possibleScores, targetScore))

// for example if we have scores 5 10 

// then add the 5 untill it reach to targetScore
// then add the 10 untill it reach to targetScore
// add 5+10 untill it reach to targetScore




// const countWaysToReachScore = (scores, targetScore) => {
//     let ways = 0;

//     scores.forEach((score) => {
//         if (score === targetScore) {
//             ways++;
//         } else if (score < targetScore) {
//             ways += countWaysToReachScore(scores, targetScore - score);
//         }
//     });

//     return ways;
// };

// const targetScore = 20;
// const possibleScores = [3, 5, 10];

// console.log(countWaysToReachScore(possibleScores, targetScore));




/****
 * Given a sequence of words, print all anagrams together
 * 
 * 
 */


// const isAnagram = (s1, s2) => {
//     if (s1.length !== s2.length) return false;

//     let s1Stack = {};
//     let s2Stack = {};

//     for (let index = 0; index < s1.length; index++) {
//         s1Stack[s1[index]] = (s1Stack[s1[index]] || 0) + 1;
//         s2Stack[s2[index]] = (s2Stack[s2[index]] || 0) + 1;
//     }

//     for (let index = 0; index < s1.length; index++) {
//         if (s1Stack[s1[index]] !== s2Stack[s1[index]]) {
//             return false;
//         }
//     }

//     return true;
// }

// const checkAnagram = (arrayOfStrings) => {
//     let anagrams = [];


//     for (let i = 0; i < arrayOfStrings.length; i++) {
//         for (let j = 0; j < arrayOfStrings.length; j++) {

//             if (isAnagram(arrayOfStrings[i], arrayOfStrings[j])) {
//                 anagrams.push(arrayOfStrings[i], arrayOfStrings[j]);
//             }

//         }

//     }

//     return [...new Set(anagrams)]
// }

// const strings = ["cat", "dog", "tac", "god", "act"];
// console.log(checkAnagram(strings));


/**
 * 
 * Implement a Phone Directory
 * 
 * 
 * store words in array
 * 
 * iterate the array of words
 *      match the query with prefix of the word if match then return that word else not 
 * 
 */


const isMatch = (word, query) => {
    const indexStart = word.indexOf(query[0]);
    if (indexStart >= 0) {
        const prefix = word.substring(indexStart, word.length);
        return prefix.startsWith(query) ? word : "";
    }
    return "";
};

const searchFor = (dictionary, query) => {
    const result = [];
    for (let index = 0; index < dictionary.length; index++) {
        const foundWord = isMatch(dictionary[index], query);
        if (foundWord !== "") {
            result.push(foundWord);
        }
    }
    return result;
};

const contacts = ["gforgeeks", "geeksquiz"];
const query = "quiz";

console.log(searchFor(contacts, query));

// console.log(isMatch("geeksquiz", query))
