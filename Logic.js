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



