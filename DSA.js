// ***********************
//ARRAY WITH BRUTE FORCE |
// ***********************

// Q1: Write a program to reverse an array or string


// declare empty array
// loop input array reverse
// save element from loop to empty array 
// return new array.
// console.time("myCode"); // 'myCode' is the namespace

// const output = (input) => {

//     let reverseArray = [];
//     let index = 0;
//     for (let i = input.length - 1; i >= 0; i--) {
//         reverseArray[index] = input[i];
//         index++;
//     }

//     return reverseArray;


// }

// console.log(output([1, 2, 3,5,6,7,8,93]));
// console.timeEnd("myCode");



// Q2: task is to find the Kth smallest element in the given array

// find the lenth of array 
//           check if kth number is greater than length of number then return false
// sort the array in ascending order 
// find the number from array with that index 


// console.time("myCode"); // 'myCode' is the namespace
// const output = (array, k) => {

//     if (k > array.length) {
//         return "out of index";
//     }

//     const sortedArray = array.sort((a, b) => a - b);

//     return sortedArray[k - 1];


// }

// console.log(output([1, 4, 5, 5, 2, 7, 3, 93,4,5,76,2,3,5,6,2,1,5,7,89,6,4,2,1,34,67,89,0,0,9,7,65,4,32,2,12,34,5,6,6,], 9));
// console.timeEnd("myCode");


// Q3: Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Algorthm 



// console.time("myCode"); // 'myCode' is the namespace
// const output = (array, k) => {


//     for (let index = 0; index < array.length; index++) {

//         for(let i = 0; i < array.length; i++) {

//             if (array[index] + array[i] === k) {

//                 return `[ ${array[index]} , ${array[i]} ]`;
//             }

//         }


//     }
//     return "sum not found";


// }

// console.log(output([1, 3, 5, 5, 10, 7, 3, 93], 100));
// console.timeEnd("myCode");



// Q4: Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.



// console.time("myCode"); // 'myCode' is the namespace
// const threeSum = (array) => {

//     const found = [];

//     for (let index = 0; index < array.length; index++) {
//         if (array[index] + array[index + 1] + array[index + 2]=== 0) {

//             found.push(`[ ${array[index]}, ${array[index + 1]}, ${array[index + 2]} ],`)
//             // return `[ ${array[index]} , ${array[index + 1]} ]`;
//         }


//     }
//     return found;


// }

// console.log(threeSum([4, -4, 0, 5, 2, 7, -7, 0]));
// console.timeEnd("myCode");



// Q5: Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// two loops 
// one loop for interrating all elemnts 
// second loop for compare the elemnts 



// console.time("myCode"); // 'myCode' is the namespace
// const containsDuplicate = (array) => {

//     for (let index = 0; index < array.length; index++) {
//         for (let i = 1; i < array.length; i++) {
//            if(array[index] === array[i])
//            {
//             return true;
//            }
            
//         }

//         return false
//     }
// }

// console.log(containsDuplicate([8, 2, 8, 4, 5, 6, 7, 8]));
// console.timeEnd("myCode");



// Q:06 You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// loop one for iterate the array
//       pick number and remove that number from array then save to new array
//       then find maximum number from that array 
//       compare the picking number with maximum number 
//       if number found then show that number 
//       else increment prev counter update new array
//       do untill whole array visit 
 

// console.time("myCode"); // 'myCode' is the namespace
// const BuyAndSellStock = (array) => {
//     let subarray = [];
//    let maxProfit = 0;

//     for (let index = 0; index < array.length; index++) {
      
//         subarray = array.slice(index);
//         maxProfit = Math.max(...subarray);
//         if(maxProfit > array[index])
//         {
//             return maxProfit - array[index];
//         }

//     }
//     return 0;
//     // console.log(maxProfit);
// }

// console.log(BuyAndSellStock([7,1,5,3,6,4]));
// console.timeEnd("myCode");


// Q:07 Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.


// run three loops 
//     declare empty array 
// if sum of yhree numbers equal to zero then add in empty array


// console.time("myCode"); // 'myCode' is the namespace
// const threeSum = (array) => {
//     let result = [];
   

//     for (let i = 0; i < array.length; i++) {
        
        
//     for (let j = 1; j < array.length; j++) {
        

//         if(array[i]+array[j]+array[j+1] == 0){
//             result.push(`[ ${array[i]}, ${array[j]}, ${array[j+1]} ]`)
//         }
//     }

//     }
//     // return 0;
//     return result;
//     // console.log(maxProfit);
// }

// console.log(threeSum([-4,-7,0,7,0,4]));
// console.timeEnd("myCode");


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







// To solve this problem, we can use the concept of prefix and suffix products of the given array. We can compute the prefix product of all elements to the left of each element and the suffix product of all elements to the right of each element. Then, we can multiply the prefix and suffix products of each element to get the answer.

// Let's see how this works with an example:

// Input: [1, 2, 3, 4]

// Prefix products: [1, 11, 12, 123] = [1, 1, 2, 6]

// Suffix products: [2341, 341, 41, 1] = [24, 12, 4, 1]

// Answer: [234, 134, 124, 123] = [24, 12, 8, 6]



// function productExceptSelf(nums) {
//     const n = nums.length;
//     const prefix = new Array(n).fill(1);
//     const suffix = new Array(n).fill(1);
//     const answer = new Array(n).fill(1);
  
//     // Compute prefix products
//     for (let i = 1; i < n; i++) {
//       prefix[i] = prefix[i-1] * nums[i-1];
//     }
  
//     // Compute suffix products
//     for (let i = n-2; i >= 0; i--) {
//       suffix[i] = suffix[i+1] * nums[i+1];
//     }
  
//     // Compute answer
//     for (let i = 0; i < n; i++) {
//       answer[i] = prefix[i] * suffix[i];
//     }
  
//     return answer;
//   }
  


// console.log(productExceptSelf([2,2,2,2,2])); 


// In this implementation, we first initialize three arrays prefix, suffix, and answer with the same length as the input array nums. Then, we compute the prefix and suffix products using two separate loops, and finally, we compute the answer using a third loop. The time complexity of this algorithm is O(n), and the space complexity is O(n) as well, since we use three additional arrays.


// Sure! The terms "prefix" and "suffix" refer to subsequences of an array.

// A prefix of an array is a subsequence of elements that includes all the elements from the beginning of the array up to a certain index. For example, the prefix of the array [1, 2, 3, 4, 5] up to index 2 is [1, 2, 3].

// A suffix of an array is a subsequence of elements that includes all the elements from a certain index to the end of the array. For example, the suffix of the array [1, 2, 3, 4, 5] from index 2 to the end is [3, 4, 5].

// In the context of the problem we were discussing earlier, we compute the prefix and suffix products of an array by multiplying all the elements in the prefix or suffix, respectively. These products are then used to compute the answer for each element of the array.

// I hope this explanation helps!



// Q10:Given an integer array nums, find the  subarray with the largest sum, and return its sum.

// function maxSubArray(nums) {
//     let maxSum = nums[0];  // Initialize the maximum sum variable with the first element of the array
//     let currentSum = nums[0];  // Initialize the current sum variable with the first element of the array
  
//     for (let i = 1; i < nums.length; i++) {  // Loop through the rest of the elements in the array
//       currentSum = Math.max(nums[i], currentSum + nums[i]);  // Calculate the maximum sum between the current element and the current sum plus the current element
//       maxSum = Math.max(maxSum, currentSum);  // Update the maximum sum variable if the current sum is greater than it
//     }
  
//     return maxSum;  // Return the maximum sum
//   }

// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); 


// Explanation of the code:

// We define a function called maxSubArray that takes an array of integers called nums as input.
// We initialize two variables called maxSum and currentSum with the first element of the nums array. These variables will be used to keep track of the maximum sum and the current sum respectively.
// We loop through the rest of the elements in the nums array starting from the second element using a for loop.
// Inside the loop, we calculate the maximum sum between the current element and the current sum plus the current element using the Math.max() method. This is the essence of Kadane's algorithm. We update the currentSum variable with this maximum sum.
// We update the maxSum variable with the maximum value between itself and the currentSum variable.
// After the loop finishes, we return the maxSum variable which holds the maximum sum of a subarray in the nums array.
// Data structure used:

// We did not use any special data structure in this solution. We only used two simple variables maxSum and currentSum to keep track of the maximum sum and the current sum respectively.


// Q11:  You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, such that the container contains the most water. Return the maximum amount of water a container can store. Notice that you may not slant the container.



// To solve this problem, we can use a two-pointer approach. We start with two pointers, one at the beginning of the array and the other at the end of the array. We calculate the area of the container using the height of the two lines and the distance between them, which is given by the difference between the indices of the two pointers. We then move the pointer with the smaller height towards the other end of the array, as it is possible that we may find a taller line there that can form a larger container. We keep track of the maximum area we have encountered so far and return it at the end.

// Here's the optimized JavaScript code using this approach:


// function maxArea(height) {
//     let maxArea = 0;
//     let left = 0, right = height.length - 1;
//     while (left < right) {
//         const currentArea = Math.min(height[left], height[right]) * (right - left);
//         maxArea = Math.max(maxArea, currentArea);
//         if (height[left] < height[right]) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return maxArea;
// }


// Here, we are using two variables left and right to represent the two pointers. We are also using the Math.min() function to get the minimum height of the two lines and the Math.max() function to get the maximum area encountered so far.

// The data structure used here is a simple array to store the heights of the vertical lines. We are not using any complex data structures for this problem as the two-pointer approach is sufficient to solve it optimally.

// Q12: Given a string s, find the length of the longest  substring without repeating characters.


// To solve this problem, we can use a sliding window approach. We maintain two pointers, left and right, that define the current window. We also maintain a set to keep track of the characters in the current window. We start by moving the right pointer to the right until we encounter a repeated character. At this point, we move the left pointer to the right until we remove the repeated character from the set. We repeat this process until we have processed the entire string, keeping track of the maximum window size we have encountered so far. Here's the optimized JavaScript code using this approach:


// function lengthOfLongestSubstring(s) {
//     let maxLen = 0;
//     let left = 0, right = 0;
//     const set = new Set();
//     while (right < s.length) {
//         if (!set.has(s.charAt(right))) {
//             set.add(s.charAt(right++));
//             maxLen = Math.max(maxLen, set.size);
//         } else {
//             set.delete(s.charAt(left++));
//         }
//     }
//     return maxLen;
// }


// Q13: Given an array of positive integers nums and a positive integer target, return the minimal length of a  subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// To solve this problem, we can use the sliding window technique with two pointers, left and right, that define the current window. We start by moving the right pointer to the right until the sum of the elements in the window is greater than or equal to the target. At this point, we move the left pointer to the right until the sum of the elements in the window is less than the target. We repeat this process until we have processed the entire array, keeping track of the minimum window size we have encountered so far.

// Here's the optimized JavaScript code using this approach:

// function minSubArrayLen(nums, target) {
//     let left = 0, right = 0;
//     let minLen = Number.MAX_SAFE_INTEGER;
//     let sum = 0;
//     while (right < nums.length) {
//         sum += nums[right++];
//         while (sum >= target) {
//             minLen = Math.min(minLen, right - left);
//             sum -= nums[left++];
//         }
//     }
//     return minLen === Number.MAX_SAFE_INTEGER ? 0 : minLen;
// }

// In this implementation, we use two variables, left and right, to represent the two pointers, and minLen to keep track of the minimum window size. We also use a sum variable to keep track of the sum of the elements in the current window.

// The time complexity of this solution is O(n), where n is the length of the input array.

// We are not using any specific data structure in this implementation, but we are using built-in JavaScript functions such as Math.min() and Number.MAX_SAFE_INTEGER to simplify our code.



// Q14: Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.


// To solve this problem, we can use the sliding window technique with two pointers, left and right, that define the current window. We start by moving the right pointer to the right until we find a window that contains all the characters in t. At this point, we move the left pointer to the right until we no longer have a valid window. We repeat this process until we have processed the entire string s, keeping track of the minimum window size we have encountered so far.

// We can use a hash table to keep track of the characters in t and their counts. We can also use another hash table to keep track of the characters in the current window and their counts. As we move the window, we update the counts in the second hash table accordingly, and check if we have a valid window by comparing the two hash tables.

// Here's the optimized JavaScript code using this approach:

// function minWindow(s, t) {
//     const tCount = new Map();
//     for (let i = 0; i < t.length; i++) {
//         tCount.set(t[i], (tCount.get(t[i]) || 0) + 1);
//     }

//     let left = 0, right = 0;
//     let windowCount = new Map();
//     let minLen = Number.MAX_SAFE_INTEGER;
//     let minWindow = "";

//     while (right < s.length) {
//         const char = s[right];
//         windowCount.set(char, (windowCount.get(char) || 0) + 1);
//         right++;

//         while (isValidWindow(tCount, windowCount)) {
//             if (right - left < minLen) {
//                 minLen = right - left;
//                 minWindow = s.substring(left, right);
//             }
//             const char = s[left];
//             windowCount.set(char, windowCount.get(char) - 1);
//             left++;
//         }
//     }

//     return minWindow;
// }

// function isValidWindow(tCount, windowCount) {
//     for (let [char, count] of tCount) {
//         if (!windowCount.has(char) || windowCount.get(char) < count) {
//             return false;
//         }
//     }
//     return true;
// }


// In this implementation, we use two variables, left and right, to represent the two pointers, and minLen and minWindow to keep track of the minimum window size and the minimum window substring, respectively. We use two hash tables, tCount and windowCount, to keep track of the characters and their counts in t and the current window, respectively.

// The time complexity of this solution is O(m + n), where m is the length of s and n is the length of t.

// In this implementation, we are using two hash tables to keep track of character counts. A hash table is a data structure that allows you to store key-value pairs, and provides efficient insertion, deletion, and lookup operations. In JavaScript, hash tables are implemented using the Map class, which allows you to store arbitrary keys and values, and provides methods for inserting, deleting, and looking up elements.



// Q:15 You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of 




// to merge the two sorted arrays nums1 and nums2 into a single array in non-decreasing order, we can use a two-pointer approach. We initialize two pointers p1 and p2 at the end of the nums1 and nums2 arrays, respectively, and another pointer p at the end of the merged nums1 array. We compare the values at p1 and p2 and add the larger value to p, then decrement p, and the corresponding pointer (p1 or p2). We repeat this process until we have merged all the elements of nums2 into nums1.

// Here's the optimized JavaScript code using this approach:



// function merge(nums1, m, nums2, n) {
//     let p1 = m - 1;
//     let p2 = n - 1;
//     let p = m + n - 1;

//     while (p1 >= 0 && p2 >= 0) {
//         if (nums1[p1] > nums2[p2]) {
//             nums1[p] = nums1[p1];
//             p1--;
//         } else {
//             nums1[p] = nums2[p2];
//             p2--;
//         }
//         p--;
//     }

//     while (p2 >= 0) {
//         nums1[p] = nums2[p2];
//         p2--;
//         p--;
//     }
// }


// In this implementation, we are using three pointers, p1, p2, and p, to merge the two arrays. We start by initializing p1 and p2 to the end of nums1 and nums2, respectively, and p to the end of the merged nums1 array. We then compare the values at p1 and p2 and add the larger value to p, then decrement p, and the corresponding pointer (p1 or p2). We repeat this process until we have merged all the elements of nums2 into nums1.

// The time complexity of this solution is O(m + n), where m is the length of nums1 and n is the length of nums2.

// In this implementation, we are using three pointers to keep track of the positions in the arrays. A pointer is a variable that holds the memory address of another variable or data structure. In JavaScript, pointers are implemented as references, which are variables that hold the memory address of an object. In this implementation, we are using pointers to keep track of the positions in the arrays and to efficiently merge them into a single sorted array.