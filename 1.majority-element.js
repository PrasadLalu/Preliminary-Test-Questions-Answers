/** 
 1. Given an array  nums of size n, return the majority element.
 The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

    Example 1:
    Input  : nums = [3,2,3]
    Output: 3
 */

const findMajority = (arr, len) => {
    let count = 0;
    let index = -1;

    for (let i = 0; i < len; i++) {
        let flag = 0;
        for (let j = 0; j < len; j++) {
            if (arr[i] === arr[j]) flag += 1;
        }
        if (flag > count) {
            count = flag;
            index = i;
        }
    }
    return index;
}

// Define an array
// const arr = [1, 2, 2, 2];
// const arr = [1, 2, 3, 4];
const arr = [3, 2, 3];
const len = arr.length;

// Getting index value by call findMajority()
const index = findMajority(arr, len);

/**
 * Result:
 * If mojority element found then it will return the element.
 * Other it will return first element or most occurance element.
 */
console.log(`Majority Element: ${arr[index]}`);
