# johnmogi.github.io

1.Given an unsorted integer array, (got it sorted) find the first missing positive integer. For example, Given [1,2,0] return 3, and [3,4,-1,1] return

Assuming the array can be modified,

<https://stackoverflow.com/questions/51346136/given-an-array-of-integers-find-the-first-missing-positive-integer-in-linear-ti>

1. get the values
2. check the values

``` We divide the array into 2 parts such that the first part consists of only positive numbers. Say we have the starting index as 0 and the ending index as end(exclusive).

We traverse the array from index 0 to end. We take the absolute value of the element at that index - say the value is x. If x > end we do nothing. If not, we make the sign of the element at index x-1 negative.

Finally, we traverse the array once more from index 0 to end. In case we encounter a positive element at some index, we output index + 1\. This is the answer. However, if we do not encounter any positive element, it means that integers 1 to end occur in the array. We output end + 1\. ```

It can also be the case that all the numbers are non-positive making end = 0\. The output end + 1 = 1 remains correct.

All the steps can be done in O(n) time and using O(1) space.

Example:

Initial Array: 1 -1 -5 -3 3 4 2 8 Step 1 partition: 1 8 2 4 3 | -3 -5 -1, end = 5

In step 2 we change the signs of the positive numbers to keep track of which integers have already occurred. For example, here array[2] = -2 < 0, it suggests that 2 + 1 = 3 has already occurred in the array. Basically, we change the value of the element having index i to negative if i+1 is in the array.

Step 2 Array changes to: -1 -8 -2 -4 3 | -3 -5 -1

In step 3, if some value array[index] is positive, it means that we did not find any integer of value index + 1 in step 2.

Step 3: Traversing from index 0 to end, we find array[4] = 3 > 0 The answer is 4 + 1 = 5

// for (let i = 0; i < positiveArray.length; i++) { // var fetchAValue = Math.min.apply(positiveArray[i]) // } // var diff = Math.abs(min, max)

// console.log(diff) // var diff = Math.abs.apply(positiveArray[0] - positiveArray[1 + 1]) // console.log(parseInt(diff))

// function differenceNums(a, b) { // for (let i = 0; i < positiveArray.length; i++) { // var a = positiveArray[i]; // var b = positiveArray[i + 1] // } // } // TODO find a way to extend into the missing number: //! 1\. the array has 0/1 - use min value: 0/1\. // ! 2\. if the array contains a "hole" - solution 2 // create a function that contains a loop to return the nums or do it without one //! 3\. if not - the last num in sequence

//? function to check if array has 0/1 as first numbers

//TODO number - 2 is hole

// const result = Math.max.apply(null, numbers);

// console.log(positiveArray)

// if (min == 0) { console.log("the 1st missing positive number is: " + min) } // else {

// var a = differenceNums(a, b).call(a) // var b = differenceNums.call(b)

// var diff = Math.abs(a - b); // console.log(differenceNums.call(a))

// } // המספר פחות זה שלפניו // יצא רווח רק אם דילגתי

// if (min < 2) { // console.log("the 1st missing positive number is: " + min) // } // if (max > 2) { // console.log("the 1st missing positive number is: " + max) // }

// function firstCheck(a) { // if (!origArray[0] == 0) { // return a = 0 // } // }

// const result = Math.max.apply(null, numbers); // function checkInitialValueOfArray(a) { // // for (let i = 0; i < 1; i++) { // // if (origArray[i] > 1) { console.log(i) }

// // } // return a // } // checkInitialValueOfArray(console.log(origArray[0]))

// firstCheck.apply(this)

// console.log(min);
