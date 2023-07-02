/**
     * array = [4, 2, 8, 6, 5]
     * arr  = [4, 2, 8, 6, 5]
     * n=8
     * target = 8;
     * k=9
     * sets = {
         * color: ["red", "blue"],
         * size: ["small", "medium"],
         * measure: ["10cm", "20cm"]
         * };
     * bucketSize = 5
     * singly linked list 
     *      const linkedList = createLinkedList();
     *      linkedList.addToHead(3);
     *      linkedList.addToHead(2);
     *      linkedList.addToTail(4);
     *      console.log(linkedList.size()); // Output: 3
     *      console.log(linkedList.search(2)); // Output: true
     *      console.log(linkedList.removeFromTail()); // Output: 4
     *      console.log(linkedList.removeFromHead()); // Output: 2
     *      console.log(linkedList.isEmpty()); // Output: false
     * doubly linked list
     *      const doublyLinkedList = createDoublyLinkedList();
     *      doublyLinkedList.addToHead(3);
     *      doublyLinkedList.addToHead(2);
     *      doublyLinkedList.addToTail(4);
     *      console.log(doublyLinkedList.size()); // Output: 3
     *      console.log(doublyLinkedList.search(2)); // Output: true
     *      console.log(doublyLinkedList.removeFromTail()); // Output: 4
     *      console.log(doublyLinkedList.removeFromHead()); // Output: 2
     *      console.log(doublyLinkedList.isEmpty()); // Output: false
     * circular linked list
     *      const circularLinkedList = createCircularLinkedList();
     *      circularLinkedList.addToHead(3);
     *      circularLinkedList.addToHead(2);
     *      circularLinkedList.addToTail(4);
     *      console.log(circularLinkedList.size()); // Output: 3
     *      console.log(circularLinkedList.search(2)); // Output: true
     *      console.log(circularLinkedList.removeFromHead()); // Output: 2
     *      console.log(circularLinkedList.isEmpty()); // Output: false
     * Max Heap
     *      const maxHeap = createMaxHeap();
     *      maxHeap.insert(3);
     *      maxHeap.insert(7);
     *      maxHeap.insert(5);
     *      console.log(maxHeap.size()); // Output: 3
     *      console.log(maxHeap.peekMax()); // Output: 7
     *      console.log(maxHeap.extractMax()); // Output: 7
     *      console.log(maxHeap.isEmpty()); // Output: false
     * Min Heap
     *      const minHeap = createMinHeap();
     *      minHeap.insert(3);
     *      minHeap.insert(7);
     *      minHeap.insert(5);
     *      console.log(minHeap.size()); // Output: 3
     *      console.log(minHeap.peekMin()); // Output: 3
     *      console.log(minHeap.extractMin()); // Output: 3
     *      console.log(minHeap.isEmpty()); // Output: false
     * graph = {
     * A: { B: 5, C: 2 },
     * B: { A: 5, D: 1 },
     * C: { A: 2, D: 6 },
     * D: { B: 1, C: 6 },
     * };
     * startNode = "A"
     * graph = {
     * A: ["B", "C"],
     * B: ["A", "D"],
     * C: ["A", "D"],
     * D: ["B", "C"],
     * };
     * startNode = "A";
     * const stack = createStack();
     * stack.push(10);
     * stack.push(20);
     * stack.push(30);
     * console.log(stack.peek()); // Output: 30
     * console.log(stack.pop()); // Output: 30
     * console.log(stack.size()); // Output: 2
     * console.log(stack.isEmpty()); // Output: false
     * const queue = createQueue();
     * queue.enqueue(10);
     * queue.enqueue(20);
     * queue.enqueue(30);
     * console.log(queue.front()); // Output: 10
     * console.log(queue.dequeue()); // Output: 10
     * console.log(queue.size()); // Output: 2
     * console.log(queue.isEmpty()); // Output: false
     * graph = {
     * A: ["B", "C"],
     * B: ["D"],
     * C: ["D"],
     * D: ["E", "F"],
     * E: ["G"],
     * F: ["G"],
     * G: [],
     * };
     * startNode = "A";
     * goalNode = "G";
     * Heuristic function: Manhattan distance between two nodes
     * function manhattanDistance(nodeA, nodeB) {
     * const [x1, y1] = nodeA.split("");
     * const [x2, y2] = nodeB.split("");
     * return Math.abs(x2 - x1) + Math.abs(y2 - y1);
     * }
     * graph = [
     * [0, 5, Infinity, 10],
     * [Infinity, 0, 3, Infinity],
     * [Infinity, Infinity, 0, 1],
     * [Infinity, Infinity, Infinity, 0]
     * ];
     * graph = [
     * [0, 2, 0, 6, 0],
     * [2, 0, 3, 8, 5],
     * [0, 3, 0, 0, 7],
     * [6, 8, 0, 0, 9],
     * [0, 5, 7, 9, 0],
     * ];
     * 
     * const binaryTree = BinaryTree();
     * binaryTree.insert(5);
     * binaryTree.insert(3);
     * binaryTree.insert(8);
     * binaryTree.insert(2);
     * binaryTree.insert(4);
     * console.log("Pre-order traversal:");
     * binaryTree.preOrderTraversal(); // Output: 5, 3, 2, 4, 8
     * console.log("In-order traversal:");
     * binaryTree.inOrderTraversal(); // Output: 2, 3, 4, 5, 8
     * console.log("Post-order traversal:");
     * binaryTree.postOrderTraversal(); // Output: 2, 4, 3, 8, 5
     * console.log("Minimum value:", binaryTree.findMinValue()); // Output: 2
     * console.log("Maximum value:", binaryTree.findMaxValue()); // Output: 8
     * binaryTree.remove(3);
     * console.log("In-order traversal after removing 3:");
     * binaryTree.inOrderTraversal(); // Output: 2, 4, 5, 8
     * binaryTree.update(8, 10);
     * console.log("In-order traversal after updating 8 to 10:");
     * binaryTree.inOrderTraversal(); // Output: 2, 4, 5, 10
     */




class ReUsable {

    static generateCartesianProduct(...sets) {

        /**
         * sets argument structure
         * var attributes = {
         * color: ["red", "blue"],
         * size: ["small", "medium"],
         * measure: ["10cm", "20cm"]
         * };
         * 
         */

        return sets.reduce((acc, set) => {
            return acc.flatMap((x) => set.map((y) => [...x, y]));
        }, [[]]);
    }

    static sumOfArray(array) {

        /**
         * array argument structure
         * [1,2,4,6,7] 
         */


        var totalSum = 0;
        for (var i = 0; i < array.length; i++) {
            totalSum += array[i];
        }
        return totalSum;
    };

    static factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    };

    static findSubsets(array) {
        var subsets = [[]]; // Initialize with an empty subset
        for (var i = 0; i < array.length; i++) {
            var currentElement = array[i];
            var subsetsLength = subsets.length;
            for (var j = 0; j < subsetsLength; j++) {
                var subset = subsets[j];
                subsets.push([].concat(_toConsumableArray(subset), [currentElement])); // Add a new subset with the current element
            }
        }

        return subsets;
    };

    static linearSearch(array, target) {

        /**
         * array = [4, 2, 8, 6, 5]
         * target = 8;
         */

        // Iterate through each element in the array
        for (let i = 0; i < array.length; i++) {
            // Check if the current element matches the target
            if (array[i] === target) {
                // If found, return the index of the element
                return i;
            }
        }

        // If the target is not found, return -1
        return -1;
    }

    static binarySearch(array, target) {

        /**
         * array = [4, 2, 8, 6, 5]
         * target = 8;
         */

        let left = 0;                   // left pointer
        let right = array.length - 1;   // right pointer

        while (left <= right) {
            let middle = Math.floor((left + right) / 2);   // calculate middle index

            if (array[middle] === target) {
                return middle;    // target found at middle index
            } else if (array[middle] < target) {
                left = middle + 1;   // target is in the right half
            } else {
                right = middle - 1;  // target is in the left half
            }
        }

        return -1;    // target not found
    }

    static selectionSort(arr) {

        /**
         * array = [4, 2, 8, 6, 5]
         */

        // Loop through each element in the array
        for (let i = 0; i < arr.length - 1; i++) {
            let minIndex = i; // Assume the current element is the minimum

            // Find the minimum element in the remaining unsorted part of the array
            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j; // Update the index of the minimum element
                }
            }

            // Swap the minimum element with the current element
            if (minIndex !== i) {
                let temp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = temp;
            }
        }

        return arr; // Return the sorted array
    }

    static bubbleSort(arr) {

        /**
         * array = [4, 2, 8, 6, 5]
         */

        // Loop through the array
        for (let i = 0; i < arr.length - 1; i++) {
            // Last i elements are already in place
            for (let j = 0; j < arr.length - i - 1; j++) {
                // Compare adjacent elements
                if (arr[j] > arr[j + 1]) {
                    // Swap if the current element is greater than the next element
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }

        return arr; // Return the sorted array
    }

    static insertionSort(arr) {
        // Loop through the array
        for (let i = 1; i < arr.length; i++) {
            let key = arr[i]; // Current element to be inserted

            let j = i - 1;
            // Move elements of the sorted part of the array to create space for the current element
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }

            arr[j + 1] = key; // Insert the current element at its correct position
        }

        return arr; // Return the sorted array
    }

    static mergeSort(arr) {
        // Base case: If the array has only one element, return it
        if (arr.length <= 1) {
            return arr;
        }

        // Find the middle index of the array
        const mid = Math.floor(arr.length / 2);

        // Split the array into two halves
        const left = arr.slice(0, mid);
        const right = arr.slice(mid);

        // Recursively sort the left and right halves
        const sortedLeft = mergeSort(left);
        const sortedRight = mergeSort(right);

        // Merge the sorted halves using the merge closure
        const merge = (left, right) => {
            let mergedArray = [];
            let leftIndex = 0;
            let rightIndex = 0;

            // Compare elements from left and right arrays and add them to the merged array
            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] <= right[rightIndex]) {
                    mergedArray.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    mergedArray.push(right[rightIndex]);
                    rightIndex++;
                }
            }

            // Add any remaining elements from the left array
            while (leftIndex < left.length) {
                mergedArray.push(left[leftIndex]);
                leftIndex++;
            }

            // Add any remaining elements from the right array
            while (rightIndex < right.length) {
                mergedArray.push(right[rightIndex]);
                rightIndex++;
            }

            return mergedArray;
        };

        return merge(sortedLeft, sortedRight);
    }

    static quickSort(arr) {
        // Base case: If the array has fewer than 2 elements, return it
        if (arr.length < 2) {
            return arr;
        }

        // Choose a pivot element from the array (can be any element)
        const pivot = arr[Math.floor(Math.random() * arr.length)];

        // Partition the array into two sub-arrays based on the pivot
        const less = arr.filter((element) => element < pivot);
        const equal = arr.filter((element) => element === pivot);
        const greater = arr.filter((element) => element > pivot);

        // Recursively sort the sub-arrays
        const sortedLess = quickSort(less);
        const sortedGreater = quickSort(greater);

        // Concatenate the sorted sub-arrays with the pivot element in between
        return [...sortedLess, ...equal, ...sortedGreater];
    }

    static heapSort(arr) {
        // Build a max heap from the array using the buildMaxHeap closure
        const buildMaxHeap = () => {
            const n = arr.length;

            // Start from the last non-leaf node and heapify each node
            for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
                heapify(n, i);
            }
        };

        // Heapify a subtree rooted at index i using the heapify closure
        const heapify = (n, i) => {
            let largest = i; // Initialize largest as the root
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            // If the left child is larger than the root
            if (left < n && arr[left] > arr[largest]) {
                largest = left;
            }

            // If the right child is larger than the largest so far
            if (right < n && arr[right] > arr[largest]) {
                largest = right;
            }

            // If the largest element is not the root, swap them and heapify the affected sub-tree
            if (largest !== i) {
                swap(i, largest);
                heapify(n, largest);
            }
        };

        // Swap two elements in the array using the swap closure
        const swap = (i, j) => {
            const temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        };

        // Start the heap sort process
        buildMaxHeap();

        // Extract elements from the heap one by one
        for (let i = arr.length - 1; i > 0; i--) {
            // Swap the root (max element) with the last unsorted element
            swap(0, i);

            // Maintain the heap property by heapifying the reduced heap
            heapify(i, 0);
        }

        return arr; // Return the sorted array
    }

    static bucketSort(arr, bucketSize = 5) {
        if (arr.length === 0) {
            return arr;
        }

        // Find the minimum and maximum values in the array
        let minValue = arr[0];
        let maxValue = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < minValue) {
                minValue = arr[i];
            } else if (arr[i] > maxValue) {
                maxValue = arr[i];
            }
        }

        // Calculate the number of buckets needed
        const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
        const buckets = new Array(bucketCount);

        // Initialize empty buckets
        for (let i = 0; i < bucketCount; i++) {
            buckets[i] = [];
        }

        // Distribute elements into buckets based on their range
        for (let i = 0; i < arr.length; i++) {
            const bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
            buckets[bucketIndex].push(arr[i]);
        }

        // Sort the elements within each bucket
        for (let i = 0; i < bucketCount; i++) {
            buckets[i].sort((a, b) => a - b);
        }

        // Concatenate the sorted buckets into a single sorted array
        let sortedArray = [];
        for (let i = 0; i < bucketCount; i++) {
            sortedArray = sortedArray.concat(buckets[i]);
        }

        return sortedArray;
    }

    static treeSort(arr) {
        let root = null;

        function insertNode(node, value) {
            if (node === null) {
                return { value: value, left: null, right: null };
            }

            if (value < node.value) {
                node.left = insertNode(node.left, value);
            } else if (value > node.value) {
                node.right = insertNode(node.right, value);
            }

            return node;
        }

        function inOrderTraversal(node, sortedArray) {
            if (node !== null) {
                inOrderTraversal(node.left, sortedArray);
                sortedArray.push(node.value);
                inOrderTraversal(node.right, sortedArray);
            }
        }

        for (let i = 0; i < arr.length; i++) {
            root = insertNode(root, arr[i]);
        }

        const sortedArray = [];
        inOrderTraversal(root, sortedArray);

        return sortedArray;
    }

    static oddEvenSort(arr) {
        let sorted = false;

        while (!sorted) {
            sorted = true;

            // Sort odd-indexed elements
            for (let i = 1; i < arr.length - 1; i += 2) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
                    sorted = false; // Set flag to continue sorting
                }
            }

            // Sort even-indexed elements
            for (let i = 0; i < arr.length - 1; i += 2) {
                if (arr[i] > arr[i + 1]) {
                    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap elements
                    sorted = false; // Set flag to continue sorting
                }
            }
        }

        return arr;
    }

    static twoPointers(arr, target) {
        let left = 0;                      // Left pointer starting from the beginning of the array
        let right = arr.length - 1;        // Right pointer starting from the end of the array

        while (left < right) {
            const sum = arr[left] + arr[right];

            if (sum === target) {
                return [arr[left], arr[right]];  // Return the pair of elements that sum up to the target
            } else if (sum < target) {
                left++;                          // Increment the left pointer if the sum is less than the target
            } else {
                right--;                         // Decrement the right pointer if the sum is greater than the target
            }
        }

        return [];                          // Return an empty array if no pair is found
    }

    static slidingWindow(arr, k) {
        const result = [];
        let windowSum = 0;
        let windowStart = 0;

        for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
            windowSum += arr[windowEnd]; // Add the element at windowEnd to the current windowSum

            if (windowEnd >= k - 1) {
                result.push(windowSum); // Add the current windowSum to the result

                windowSum -= arr[windowStart]; // Subtract the element at windowStart from the windowSum
                windowStart++; // Slide the window to the right
            }
        }

        return result;
    }

    // singly linked list 
    static createLinkedList() {
        function ListNode(value) {
            this.value = value;
            this.next = null;
        }

        function addToHead(head, value) {
            const newNode = new ListNode(value);

            if (head === null) {
                head = newNode;
            } else {
                newNode.next = head;
                head = newNode;
            }

            return head;
        }

        function addToTail(head, value) {
            const newNode = new ListNode(value);

            if (head === null) {
                head = newNode;
            } else {
                let currentNode = head;
                while (currentNode.next !== null) {
                    currentNode = currentNode.next;
                }
                currentNode.next = newNode;
            }

            return head;
        }

        function removeFromHead(head) {
            if (head === null) {
                return null;
            }

            const removedNode = head;

            if (head.next === null) {
                head = null;
            } else {
                head = head.next;
            }

            return {
                head: head,
                value: removedNode.value,
            };
        }

        function removeFromTail(head) {
            if (head === null) {
                return null;
            }

            if (head.next === null) {
                head = null;
                return {
                    head: head,
                    value: head.value,
                };
            }

            let currentNode = head;
            while (currentNode.next.next !== null) {
                currentNode = currentNode.next;
            }

            const removedNode = currentNode.next;
            currentNode.next = null;
            return {
                head: head,
                value: removedNode.value,
            };
        }

        function search(head, value) {
            let currentNode = head;

            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return true;
                }
                currentNode = currentNode.next;
            }

            return false;
        }

        function isEmpty(head) {
            return head === null;
        }

        function size(head) {
            let count = 0;
            let currentNode = head;

            while (currentNode !== null) {
                count++;
                currentNode = currentNode.next;
            }

            return count;
        }

        let head = null;

        return {
            addToHead: (value) => (head = addToHead(head, value)),
            addToTail: (value) => (head = addToTail(head, value)),
            removeFromHead: () => {
                const result = removeFromHead(head);
                head = result.head;
                return result.value;
            },
            removeFromTail: () => {
                const result = removeFromTail(head);
                head = result.head;
                return result.value;
            },
            search: (value) => search(head, value),
            isEmpty: () => isEmpty(head),
            size: () => size(head),
        };
    }

    static createDoublyLinkedList() {
        function DoublyListNode(value) {
            this.value = value;
            this.prev = null;
            this.next = null;
        }

        let head = null;
        let tail = null;
        let length = 0;

        function addToHead(value) {
            const newNode = new DoublyListNode(value);

            if (head === null) {
                head = newNode;
                tail = newNode;
            } else {
                newNode.next = head;
                head.prev = newNode;
                head = newNode;
            }

            length++;
        }

        function addToTail(value) {
            const newNode = new DoublyListNode(value);

            if (tail === null) {
                head = newNode;
                tail = newNode;
            } else {
                newNode.prev = tail;
                tail.next = newNode;
                tail = newNode;
            }

            length++;
        }

        function removeFromHead() {
            if (head === null) {
                return null;
            }

            const removedNode = head;

            if (head === tail) {
                head = null;
                tail = null;
            } else {
                head = head.next;
                head.prev = null;
            }

            length--;
            return removedNode.value;
        }

        function removeFromTail() {
            if (tail === null) {
                return null;
            }

            const removedNode = tail;

            if (head === tail) {
                head = null;
                tail = null;
            } else {
                tail = tail.prev;
                tail.next = null;
            }

            length--;
            return removedNode.value;
        }

        function search(value) {
            let currentNode = head;

            while (currentNode !== null) {
                if (currentNode.value === value) {
                    return true;
                }
                currentNode = currentNode.next;
            }

            return false;
        }

        function isEmpty() {
            return length === 0;
        }

        function size() {
            return length;
        }

        return {
            addToHead: addToHead,
            addToTail: addToTail,
            removeFromHead: removeFromHead,
            removeFromTail: removeFromTail,
            search: search,
            isEmpty: isEmpty,
            size: size,
        };
    }

    static createCircularLinkedList() {
        function CircularListNode(value) {
            this.value = value;
            this.next = null;
        }

        let head = null;
        let length = 0;

        function addToHead(value) {
            const newNode = new CircularListNode(value);

            if (head === null) {
                newNode.next = newNode; // Point the new node to itself since it's the only node
            } else {
                newNode.next = head.next; // Point the new node to the current head's next node
                head.next = newNode; // Update the current head's next node to the new node
            }

            head = newNode; // Update the head to the new node
            length++;
        }

        function addToTail(value) {
            const newNode = new CircularListNode(value);

            if (head === null) {
                newNode.next = newNode; // Point the new node to itself since it's the only node
                head = newNode; // Set the head to the new node
            } else {
                newNode.next = head.next; // Point the new node to the head's next node
                head.next = newNode; // Update the head's next node to the new node
                head = newNode; // Update the head to the new node
            }

            length++;
        }

        function removeFromHead() {
            if (head === null) {
                return null; // Return null if the list is empty
            }

            const removedNode = head.next; // The node to be removed is the head's next node

            if (removedNode === head) {
                head = null; // If there's only one node, set the head to null
            } else {
                head.next = removedNode.next; // Update the head's next node to skip the removed node
            }

            length--;
            return removedNode.value;
        }

        function search(value) {
            if (head === null) {
                return false; // Return false if the list is empty
            }

            let currentNode = head.next; // Start from the head's next node

            while (currentNode !== head) {
                if (currentNode.value === value) {
                    return true; // Return true if the value is found
                }
                currentNode = currentNode.next;
            }

            return false; // Return false if the value is not found
        }

        function isEmpty() {
            return length === 0;
        }

        function size() {
            return length;
        }

        return {
            addToHead: addToHead,
            addToTail: addToTail,
            removeFromHead: removeFromHead,
            search: search,
            isEmpty: isEmpty,
            size: size,
        };
    }

    static createMaxHeap() {
        let heap = [];

        function getParentIndex(index) {
            return Math.floor((index - 1) / 2);
        }

        function getLeftChildIndex(index) {
            return 2 * index + 1;
        }

        function getRightChildIndex(index) {
            return 2 * index + 2;
        }

        function hasParent(index) {
            return getParentIndex(index) >= 0;
        }

        function hasLeftChild(index) {
            return getLeftChildIndex(index) < heap.length;
        }

        function hasRightChild(index) {
            return getRightChildIndex(index) < heap.length;
        }

        function parent(index) {
            return heap[getParentIndex(index)];
        }

        function leftChild(index) {
            return heap[getLeftChildIndex(index)];
        }

        function rightChild(index) {
            return heap[getRightChildIndex(index)];
        }

        function swap(index1, index2) {
            const temp = heap[index1];
            heap[index1] = heap[index2];
            heap[index2] = temp;
        }

        function heapifyUp() {
            let index = heap.length - 1;

            while (hasParent(index) && heap[index] > parent(index)) {
                const parentIndex = getParentIndex(index);
                swap(index, parentIndex);
                index = parentIndex;
            }
        }

        function heapifyDown() {
            let index = 0;

            while (hasLeftChild(index)) {
                let biggerChildIndex = getLeftChildIndex(index);

                if (hasRightChild(index) && rightChild(index) > leftChild(index)) {
                    biggerChildIndex = getRightChildIndex(index);
                }

                if (heap[index] > heap[biggerChildIndex]) {
                    break;
                }

                swap(index, biggerChildIndex);
                index = biggerChildIndex;
            }
        }

        function insert(value) {
            heap.push(value);
            heapifyUp();
        }

        function extractMax() {
            if (heap.length === 0) {
                return null;
            }

            const max = heap[0];
            heap[0] = heap.pop();
            heapifyDown();
            return max;
        }

        function peekMax() {
            return heap[0];
        }

        function isEmpty() {
            return heap.length === 0;
        }

        function size() {
            return heap.length;
        }

        return {
            insert: insert,
            extractMax: extractMax,
            peekMax: peekMax,
            isEmpty: isEmpty,
            size: size,
        };
    }

    static createMinHeap() {
        let heap = [];

        function getParentIndex(index) {
            return Math.floor((index - 1) / 2);
        }

        function getLeftChildIndex(index) {
            return 2 * index + 1;
        }

        function getRightChildIndex(index) {
            return 2 * index + 2;
        }

        function hasParent(index) {
            return getParentIndex(index) >= 0;
        }

        function hasLeftChild(index) {
            return getLeftChildIndex(index) < heap.length;
        }

        function hasRightChild(index) {
            return getRightChildIndex(index) < heap.length;
        }

        function parent(index) {
            return heap[getParentIndex(index)];
        }

        function leftChild(index) {
            return heap[getLeftChildIndex(index)];
        }

        function rightChild(index) {
            return heap[getRightChildIndex(index)];
        }

        function swap(index1, index2) {
            const temp = heap[index1];
            heap[index1] = heap[index2];
            heap[index2] = temp;
        }

        function heapifyUp() {
            let index = heap.length - 1;

            while (hasParent(index) && heap[index] < parent(index)) {
                const parentIndex = getParentIndex(index);
                swap(index, parentIndex);
                index = parentIndex;
            }
        }

        function heapifyDown() {
            let index = 0;

            while (hasLeftChild(index)) {
                let smallerChildIndex = getLeftChildIndex(index);

                if (hasRightChild(index) && rightChild(index) < leftChild(index)) {
                    smallerChildIndex = getRightChildIndex(index);
                }

                if (heap[index] < heap[smallerChildIndex]) {
                    break;
                }

                swap(index, smallerChildIndex);
                index = smallerChildIndex;
            }
        }

        function insert(value) {
            heap.push(value);
            heapifyUp();
        }

        function extractMin() {
            if (heap.length === 0) {
                return null;
            }

            const min = heap[0];
            heap[0] = heap.pop();
            heapifyDown();
            return min;
        }

        function peekMin() {
            return heap[0];
        }

        function isEmpty() {
            return heap.length === 0;
        }

        function size() {
            return heap.length;
        }

        return {
            insert: insert,
            extractMin: extractMin,
            peekMin: peekMin,
            isEmpty: isEmpty,
            size: size,
        };
    }

    static dijkstra(graph, startNode) {
        const distances = {}; // Stores the shortest distances from the start node to each node
        const visited = {}; // Tracks the visited nodes
        const previous = {}; // Stores the previous node in the shortest path

        // Initialize distances, visited, and previous
        for (let node in graph) {
            distances[node] = Infinity; // Set initial distance to Infinity for all nodes
            visited[node] = false; // Mark all nodes as unvisited
            previous[node] = null; // Set initial previous node to null for all nodes
        }

        distances[startNode] = 0; // Set the distance of the start node to 0

        while (true) {
            let closestNode = null;
            let shortestDistance = Infinity;

            // Find the unvisited node with the shortest distance
            for (let node in graph) {
                if (!visited[node] && distances[node] < shortestDistance) {
                    closestNode = node;
                    shortestDistance = distances[node];
                }
            }

            if (closestNode === null) {
                break; // If there are no unvisited nodes with finite distances, exit the loop
            }

            visited[closestNode] = true; // Mark the current node as visited

            // Update the distances and previous nodes for neighboring nodes
            for (let neighbor in graph[closestNode]) {
                let distance = graph[closestNode][neighbor];
                let totalDistance = distances[closestNode] + distance;

                if (totalDistance < distances[neighbor]) {
                    distances[neighbor] = totalDistance;
                    previous[neighbor] = closestNode;
                }
            }
        }

        return {
            distances: distances,
            previous: previous,
        };
    }

    static breadthFirstSearch(graph, startNode) {
        const visited = {}; // Tracks the visited nodes
        const queue = []; // Queue for BFS traversal
        const result = []; // Stores the order of visited nodes

        queue.push(startNode); // Add the start node to the queue
        visited[startNode] = true; // Mark the start node as visited

        while (queue.length > 0) {
            const currentNode = queue.shift(); // Get the first node from the queue

            result.push(currentNode); // Add the current node to the result

            // Visit all the neighboring nodes of the current node
            for (let neighbor of graph[currentNode]) {
                if (!visited[neighbor]) {
                    queue.push(neighbor); // Add the unvisited neighbor to the queue
                    visited[neighbor] = true; // Mark the neighbor as visited
                }
            }
        }

        return result;
    }

    static depthFirstSearch(graph, startNode) {
        const visited = {}; // Tracks the visited nodes
        const result = []; // Stores the order of visited nodes

        function dfs(node) {
            visited[node] = true; // Mark the current node as visited
            result.push(node); // Add the current node to the result

            // Visit all the neighboring nodes of the current node
            for (let neighbor of graph[node]) {
                if (!visited[neighbor]) {
                    dfs(neighbor); // Recursively call DFS on unvisited neighbor
                }
            }
        }

        dfs(startNode); // Call the DFS function starting from the start node

        return result;
    }

    static createStack() {
        const stack = []; // Array to store the stack elements

        // Push an element onto the stack
        function push(element) {
            stack.push(element);
        }

        // Pop the top element from the stack and return it
        function pop() {
            if (isEmpty()) {
                return "Stack is empty";
            }
            return stack.pop();
        }

        // Get the top element of the stack without removing it
        function peek() {
            if (isEmpty()) {
                return "Stack is empty";
            }
            return stack[stack.length - 1];
        }

        // Check if the stack is empty
        function isEmpty() {
            return stack.length === 0;
        }

        // Get the number of elements in the stack
        function size() {
            return stack.length;
        }

        return {
            push,
            pop,
            peek,
            isEmpty,
            size,
        };
    }

    static createQueue() {
        const queue = []; // Array to store the queue elements

        // Enqueue an element into the queue
        function enqueue(element) {
            queue.push(element);
        }

        // Dequeue the front element from the queue and return it
        function dequeue() {
            if (isEmpty()) {
                return "Queue is empty";
            }
            return queue.shift();
        }

        // Get the front element of the queue without removing it
        function front() {
            if (isEmpty()) {
                return "Queue is empty";
            }
            return queue[0];
        }

        // Check if the queue is empty
        function isEmpty() {
            return queue.length === 0;
        }

        // Get the number of elements in the queue
        function size() {
            return queue.length;
        }

        return {
            enqueue,
            dequeue,
            front,
            isEmpty,
            size,
        };
    }

    static aStarAlgorithm(graph, startNode, goalNode, heuristic) {
        const openSet = [startNode]; // Nodes to be explored
        const cameFrom = {}; // Tracks the optimal path
        const gScore = {}; // Cost from start node to each node
        const fScore = {}; // Cost from start node to each node + heuristic value

        gScore[startNode] = 0; // Cost from start node to itself is 0
        fScore[startNode] = heuristic(startNode, goalNode); // Estimated total cost from start node to goal node

        while (openSet.length > 0) {
            // Find the node with the lowest fScore in the openSet
            const currentNode = openSet.reduce((minNode, node) => (fScore[node] < fScore[minNode] ? node : minNode));

            if (currentNode === goalNode) {
                // Goal node reached, reconstruct the path and return it
                return reconstructPath(cameFrom, currentNode);
            }

            openSet.splice(openSet.indexOf(currentNode), 1); // Remove currentNode from openSet

            for (let neighbor of graph[currentNode]) {
                const tentativeGScore = gScore[currentNode] + 1; // Assume the cost between adjacent nodes is 1

                if (!gScore[neighbor] || tentativeGScore < gScore[neighbor]) {
                    // A better path is found
                    cameFrom[neighbor] = currentNode;
                    gScore[neighbor] = tentativeGScore;
                    fScore[neighbor] = gScore[neighbor] + heuristic(neighbor, goalNode);

                    if (!openSet.includes(neighbor)) {
                        openSet.push(neighbor);
                    }
                }
            }
        }

        // No path found
        return "No path found";

        // Reconstruct the path from the start node to the goal node
        function reconstructPath(cameFrom, currentNode) {
            const path = [currentNode];

            while (cameFrom[currentNode]) {
                currentNode = cameFrom[currentNode];
                path.unshift(currentNode);
            }

            return path;
        }
    }

    static floydWarshallAlgorithm(graph) {
        const numVertices = graph.length;
        const distances = [...graph];

        // Initialize distances for unreachable vertices as Infinity
        for (let i = 0; i < numVertices; i++) {
            for (let j = 0; j < numVertices; j++) {
                if (distances[i][j] === 0 && i !== j) {
                    distances[i][j] = Infinity;
                }
            }
        }

        // Perform Floyd-Warshall algorithm
        for (let k = 0; k < numVertices; k++) {
            for (let i = 0; i < numVertices; i++) {
                for (let j = 0; j < numVertices; j++) {
                    if (distances[i][k] + distances[k][j] < distances[i][j]) {
                        distances[i][j] = distances[i][k] + distances[k][j];
                    }
                }
            }
        }

        return distances;
    }

    static kruskalAlgorithm(graph) {
        const numVertices = graph.length;
        const sortedEdges = [];

        // Create a list of all edges in the graph
        for (let i = 0; i < numVertices; i++) {
            for (let j = i + 1; j < numVertices; j++) {
                if (graph[i][j] !== 0) {
                    sortedEdges.push([i, j, graph[i][j]]);
                }
            }
        }

        // Sort the edges based on their weights in ascending order
        sortedEdges.sort((a, b) => a[2] - b[2]);

        const parent = new Array(numVertices).fill(-1);
        const minimumSpanningTree = [];

        // Find the parent of a node in the disjoint set
        function findParent(node) {
            while (parent[node] !== -1) {
                node = parent[node];
            }
            return node;
        }

        // Union two disjoint sets by updating the parent
        function unionSet(nodeA, nodeB) {
            const parentA = findParent(nodeA);
            const parentB = findParent(nodeB);
            parent[parentB] = parentA;
        }

        // Perform Kruskal's algorithm
        for (let edge of sortedEdges) {
            const [source, destination, weight] = edge;
            const parentSource = findParent(source);
            const parentDestination = findParent(destination);

            if (parentSource !== parentDestination) {
                // Include the edge in the minimum spanning tree
                minimumSpanningTree.push(edge);
                unionSet(parentSource, parentDestination);
            }
        }

        return minimumSpanningTree;
    }

    static BinaryTree() {
        let root = null;

        function BinaryTreeNode(value) {
            this.value = value;
            this.left = null;
            this.right = null;
        }

        function insert(value) {
            const newNode = new BinaryTreeNode(value);

            if (!root) {
                // If the tree is empty, set the new node as the root
                root = newNode;
            } else {
                // Traverse the tree to find the appropriate position to insert the new node
                let currentNode = root;

                while (currentNode) {
                    if (value < currentNode.value) {
                        // If the value is less than the current node's value, go left
                        if (!currentNode.left) {
                            // If the left child is null, insert the new node as the left child
                            currentNode.left = newNode;
                            break;
                        }
                        currentNode = currentNode.left;
                    } else {
                        // If the value is greater than or equal to the current node's value, go right
                        if (!currentNode.right) {
                            // If the right child is null, insert the new node as the right child
                            currentNode.right = newNode;
                            break;
                        }
                        currentNode = currentNode.right;
                    }
                }
            }
        }

        function remove(value) {
            root = removeNode(root, value);
        }

        function removeNode(node, value) {
            if (!node) {
                // Return null if the node is null
                return null;
            }

            if (value < node.value) {
                // Recursively traverse the left subtree if the value is less than the node's value
                node.left = removeNode(node.left, value);
            } else if (value > node.value) {
                // Recursively traverse the right subtree if the value is greater than the node's value
                node.right = removeNode(node.right, value);
            } else {
                // Found the node to be removed

                if (!node.left && !node.right) {
                    // Case 1: Node is a leaf node
                    return null;
                } else if (!node.left) {
                    // Case 2: Node has only a right child
                    return node.right;
                } else if (!node.right) {
                    // Case 3: Node has only a left child
                    return node.left;
                } else {
                    // Case 4: Node has both left and right children
                    const minRight = findMinNode(node.right);
                    node.value = minRight.value;
                    node.right = removeNode(node.right, minRight.value);
                }
            }

            return node;
        }

        function findMinNode(node) {
            // Find the minimum value node in the subtree
            while (node.left) {
                node = node.left;
            }
            return node;
        }

        function update(oldValue, newValue) {
            remove(oldValue);
            insert(newValue);
        }

        function preOrderTraversal(node = root) {
            if (!node) return;

            console.log(node.value); // Process the current node
            preOrderTraversal(node.left); // Recursively traverse the left subtree
            preOrderTraversal(node.right); // Recursively traverse the right subtree
        }

        function inOrderTraversal(node = root) {
            if (!node) return;

            inOrderTraversal(node.left); // Recursively traverse the left subtree
            console.log(node.value); // Process the current node
            inOrderTraversal(node.right); // Recursively traverse the right subtree
        }

        function postOrderTraversal(node = root) {
            if (!node) return;

            postOrderTraversal(node.left); // Recursively traverse the left subtree
            postOrderTraversal(node.right); // Recursively traverse the right subtree
            console.log(node.value); // Process the current node
        }

        function findMinValue() {
            let currentNode = root;

            while (currentNode.left) {
                currentNode = currentNode.left;
            }

            return currentNode.value;
        }

        function findMaxValue() {
            let currentNode = root;

            while (currentNode.right) {
                currentNode = currentNode.right;
            }

            return currentNode.value;
        }

        // Public API
        return {
            insert,
            remove,
            update,
            preOrderTraversal,
            inOrderTraversal,
            postOrderTraversal,
            findMinValue,
            findMaxValue,
        };
    }

    static testFunction() {
        return "ReUsable Module is working"
    }

}

module.exports = { ReUsable };
