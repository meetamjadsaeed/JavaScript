// ***********************
//ARRAY WITH DSA |
// ***********************


// Q1: Write a program to reverse an array or string

// A stack is a data structure that follows the Last-In-First-Out (LIFO) principle. In other words, the last element added to the stack is the first one to be removed. We can use a stack to reverse the order of elements in an array as follows:

// Create an empty stack.
// Iterate through the input array and push each element onto the stack.
// Create a new array and pop each element from the stack and add it to the new array.
// This way, we can reverse the order of elements in the array without having to iterate through it twice, as in the original code. Here's the optimized code:



// const output = (input) => {
//     const stack = [];
//     for (let i = 0; i < input.length; i++) {
//       stack.push(input[i]);
//     }
//     const reverseArray = [];
//     while (stack.length > 0) {
//       reverseArray.push(stack.pop());
//     }
//     return reverseArray;
//   }

//   console.log(output([1, 2, 3, 5, 6, 7, 8, 93]));


// Q2: task is to find the Kth smallest element in the given array


// The current implementation sorts the entire array and returns the k-th smallest element ( withour DSA). Sorting the entire array can be time-consuming, especially when k is much smaller than the length of the array.

// To optimize this code, we can use the QuickSelect algorithm, which is similar to QuickSort. The basic idea of QuickSelect is to select a pivot element and partition the array into two parts, one with elements smaller than the pivot and the other with elements greater than the pivot. We then recursively select the k-th smallest element in the smaller partition or the (k-m)-th smallest element in the greater partition, where m is the number of elements in the smaller partition.

// Here is the optimized code using the QuickSelect algorithm:


// console.time("myCode"); // 'myCode' is the namespace
// const partition = (array, left, right, pivotIndex) => {
//     const pivotValue = array[pivotIndex];
//     let tmp = array[pivotIndex];
//     array[pivotIndex] = array[right];
//     array[right] = tmp;
//     let storeIndex = left;
//     for (let i = left; i < right; i++) {
//         if (array[i] < pivotValue) {
//             tmp = array[i];
//             array[i] = array[storeIndex];
//             array[storeIndex] = tmp;
//             storeIndex++;
//         }
//     }
//     tmp = array[storeIndex];
//     array[storeIndex] = array[right];
//     array[right] = tmp;
//     return storeIndex;
// };

// const quickSelect = (array, left, right, k) => {
//     if (left === right) {
//         return array[left];
//     }
//     let pivotIndex = left + Math.floor(Math.random() * (right - left + 1));
//     pivotIndex = partition(array, left, right, pivotIndex);
//     if (k === pivotIndex) {
//         return array[k];
//     } else if (k < pivotIndex) {
//         return quickSelect(array, left, pivotIndex - 1, k);
//     } else {
//         return quickSelect(array, pivotIndex + 1, right, k);
//     }
// };

// const output = (array, k) => {
//     if (k > array.length) {
//         return "out of index";
//     }
//     return quickSelect(array, 0, array.length - 1, k - 1);
// };

// console.log(output([1, 4, 5, 5, 2, 7, 3, 93], 3));
// console.timeEnd("myCode");

// In the above implementation, the partition function takes an array, left and right indices, and a pivot index, and partitions the array around the pivot index. The quickSelect function takes an array, left and right indices, and a value k, and recursively finds the k-th smallest element in the array. The output function takes an array and a value k and returns the k-th smallest element in the array using the quickSelect function.

// The time complexity of the optimized code is O(n), where n is the length of the array. This is because, in the worst case, we need to partition the array n times. However, on average, the algorithm partitions the array log(n) times, making it much faster than sorting the entire array.

// but my previous code was taking 4.22 ms and your code is taking 4.5 ms


// The performance of an algorithm can depend on various factors, such as the size of the input, the distribution of the input values, the implementation details, and the hardware on which the code is running. Therefore, it's possible that in some cases, the previous code may perform better than the optimized code, especially if the input size is small or if the input values are already partially sorted.

// That being said, it's worth noting that measuring the performance of code can be a complex task, and it's important to take multiple measurements and consider various factors to get an accurate picture of the performance. In addition, it's also important to optimize code based on its complexity and scalability, rather than just its speed on a particular input.

// In the case of finding the k-th smallest element in an array, the QuickSelect algorithm has a lower time complexity than sorting the entire array, especially when k is much smaller than the length of the array. Therefore, the optimized code using QuickSelect should perform better in most cases, especially for larger input sizes and random or unsorted input values.

// If you are still concerned about the performance of the optimized code, you can try to further optimize the implementation by using a median-of-medians pivot selection algorithm, which guarantees a worst-case linear time complexity. However, this implementation can be more complex and may not provide a significant performance improvement for small input sizes or partially sorted input values.

// what is main difference between Quick Select and Quicksort Algorithm  




// Q3: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Algorthm 



// console.time("myCode"); // 'myCode' is the namespace
// const twoSum = (nums, target) => {
//     const numMap = new Map(); // create a new map data structure to store the numbers in the input array

//     for (let i = 0; i < nums.length; i++) { // loop through each element in the input array
//       const complement = target - nums[i]; // calculate the complement value of the current number

//       if (numMap.has(complement)) { // check if the complement value exists in the map
//         return [numMap.get(complement), i]; // return the indices of the complement and the current number
//       }

//       numMap.set(nums[i], i); // add the current number and its index to the map
//     }

//     return null; // return null if there is no valid two-sum pair
//   };  

// console.log(output([1, 4, 5, 5, 2, 7, 3, 93], 100));
// console.timeEnd("myCode");


// The given code performs a two-sum operation on an input array to find if there exists any two elements in the array that sum up to a given target value k.

// Here's a possible solution that uses a hash map data structure to improve the time complexity of the algorithm:



// The approach used here is to store the indices of each element in a hash map data structure, and then loop through the input array to check if the complement value of each element (i.e., target - nums[i]) exists in the map. If it does, we have found a valid two-sum pair, and we can return the indices of the two numbers as an array. If there is no valid two-sum pair, we return null. This algorithm has a time complexity of O(n) because we only need to loop through the input array once, and the hash map lookups are constant time.




// Q4: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// console.time("myCode"); // 'myCode' is the namespace
// const threeSum = (array) => {
//     const found = [];

//     // Sort the array in non-descending order
//     array.sort((a, b) => a - b);

//     // Iterate over all possible pairs of elements in the array
//     for (let i = 0; i < array.length - 2; i++) {
//         // Use a HashSet to store the complement of the current element
//         let complementSet = new Set();

//         // Iterate over all elements after the current element
//         for (let j = i + 1; j < array.length; j++) {
//             let complement = -array[i] - array[j];

//             // Check if the complement of the current pair is in the HashSet
//             if (complementSet.has(complement)) {
//                 found.push(`[ ${array[i]}, ${array[j]}, ${complement} ],`);
//             }

//             // Add the current element to the HashSet
//             complementSet.add(array[j]);
//         }
//     }

//     return found;
// }


// console.log(threeSum([4, -4, 0, 5, 2, 7, -7, 0]));
// console.timeEnd("myCode");


// In this implementation, we first sort the input array in non-descending order using the sort method. This allows us to identify duplicates and makes it easier to find pairs of elements that add up to a particular value. We then iterate over all possible pairs of elements in the array and use a HashSet to store the complement of the current pair. We check if the complement of the current pair is in the HashSet, and if so, we add the triplet of elements to the found array. Finally, we return the found array.

// Here are comments on each line of code in the optimized implementation:




// Q5: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
// const containsDuplicate = (array) => { // declare function with input array parameter
//     const set = new Set(); // create an empty set to store unique elements

//     for (const element of array) { // iterate over the elements of the array
//       if (set.has(element)) { // if element already exists in the set, it's a duplicate
//         return true; // return true to indicate presence of duplicate
//       }
//       set.add(element); // add element to the set
//     }

//     return false; // no duplicates found, return false
//   };

//   console.log(containsDuplicate([8, 2, 8, 4, 5, 6, 7, 8])); // call the function with the test input and log the result to console

//   Using a hash set improves the time complexity of the algorithm to O(n) (linear time complexity) from the previous O(n^2) (quadratic time complexity).





// Q:06 You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// const maxProfit = (prices) => { // declare function with input array parameter
//     let minPrice = Infinity; // initialize the minimum buy price to infinity
//     let maxProfit = 0; // initialize the maximum profit to zero

//     for (const price of prices) { // iterate over each price in the input array
//       if (price < minPrice) { // if the current price is less than the minimum buy price so far
//         minPrice = price; // update the minimum buy price
//       } else if (price - minPrice > maxProfit) { // else, check if selling at current price would yield a greater profit
//         maxProfit = price - minPrice; // update the maximum profit
//       }
//     }

//     return maxProfit; // return the maximum profit that can be obtained
//   };

//   console.log(maxProfit([7, 6, 4, 3, 1])); // Output: 0

// This optimized code uses a one-pass approach to solve the problem in O(n) time complexity, where n is the number of elements in the input array.




// Q:07 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// const threeSum = (array) => {
//     let result = [];
//     const hashTable = {};

//     // loop through each element in the array
//     for (let i = 0; i < array.length; i++) {
//         // calculate the sum needed to make the current element and one of the remaining elements add up to zero
//         for (let j = i + 1; j < array.length; j++) {
//             const sumNeeded = -1 * (array[i] + array[j]);

//             // check if the sum needed is in the hash table
//             if (hashTable[sumNeeded] !== undefined) {
//                 // if it is, we've found a triplet whose sum is zero, so add it to the result array
//                 result.push([array[i], array[j], sumNeeded]);
//             }

//             // add the current element to the hash table
//             hashTable[array[j]] = j;
//         }
//     }

//     return result;
// };

//   console.log(threeSum([-1,0,1,2,-1,-4]));


//   Here's how this code works:

// We initialize an empty result array and a hash table to store elements as we loop through the array.
// We loop through each element in the array and, for each element, we loop through all remaining elements to calculate the sum needed to make the current element and one of the remaining elements add up to zero.
// We then check if the sum needed is in the hash table. If it is, we've found a triplet whose sum is zero, so we add it to the result array.
// Finally, we add the current element to the hash table for future lookups.
// We return the result array containing all unique triplets whose sum is zero.
// Overall, this code has a time complexity of O(n^2) due to the nested loops, and a space complexity of O(n) due to the hash table. However, it has the advantage of avoiding duplicates more easily than the two-pointer approach since we only add a triplet to the result array if it hasn't already been added.





//   why -1 is in  const sumNeeded = -1 * (array[i] + array[j]);

//   The reason why we use -1 in const sumNeeded = -1 * (array[i] + array[j]) is because we're trying to find a triplet in the input array whose sum is zero.

// We know that the sum of any two elements in the array is not going to be negative, so to get the sum that we're looking for, we need to negate the sum of the first two elements.

// For example, if the first two elements in the array are 2 and -3, then their sum is -1. To find the third element that would make the sum zero, we need to negate -1, which gives us 1. So, the triplet that we're looking for is [2, -3, 1].

// Therefore, by using -1 * (array[i] + array[j]), we can get the sum that we're looking for, which we can then check against the hash table to see if there's a third element that would make the sum zero.



// Q:08 Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// const sortColors = (colors) => {
//     // Initialize an array to count the number of occurrences of each color
//     const count = [0, 0, 0]; // 0: red, 1: white, 2: blue

//     // Count the number of occurrences of each color in the input array
//     for (let i = 0; i < colors.length; i++) {
//       count[colors[i]]++; // Increment the count of the corresponding color
//     }

//     // Initialize an array to store the sorted colors
//     const sorted = [];

//     // Add the red colors to the sorted array
//     for (let i = 0; i < count[0]; i++) {
//       sorted.push(0);
//     }

//     // Add the white colors to the sorted array
//     for (let i = 0; i < count[1]; i++) {
//       sorted.push(1);
//     }

//     // Add the blue colors to the sorted array
//     for (let i = 0; i < count[2]; i++) {
//       sorted.push(2);
//     }

//     // Return the sorted array of colors
//     return sorted;
//   };

//   console.log(sortColors([2, 1, 0, 1, 2, 0, 1])); // output: [0, 0, 1, 1, 1, 2, 2]



//   The data structure tactics used in this code are:

// Counting array: An array count is used to count the number of occurrences of each color in the input array. The count array is initialized with all zeros, and then as each color is encountered in the input array, the corresponding count in count is incremented. This is an efficient way to count the occurrences of each color without having to sort the input array.

// Bucket sort: The sorted array sorted is constructed by adding the colors in the order of red, white, and blue. This is known as a bucket sort or counting sort. The sorted array is initially empty, and then the red colors are added by iterating count[0] times and pushing 0 onto sorted each time. Similarly, the white and blue colors are added by iterating count[1] and count[2] times, respectively.

// The overall time complexity of this algorithm is O(n), where n is the length of the input array, since the input array is iterated only once to count the occurrences of each color, and then the sorted array is constructed in linear time by adding the colors in the order of red, white, and blue.



// Q9: Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// run two loops
// declare empty array
//     one will select one element 
//         second loop will itertate all nested elements 
//         multiple nest elemnts with each other 
//             add that value to empty array


const productOfArray = (input) => {

    var productArray = [];
    var storeResult = 1;

    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length - 1; j+2) {
            if (input[i] == input[j]) {
                continue;
            }
            else {
                storeResult *= input[j] * input[j + 1]

            }


        }
        productArray.push(storeResult);

    }


    return productArray;
};

console.log(productOfArray([1,2,3,4])); 
