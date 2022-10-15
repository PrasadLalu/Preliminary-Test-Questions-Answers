/**
    Find the longest common prefix string from an array of string
    If there is no common prefix, return an empty string "".

    Example 1:
    Input: strs = ["flowing","flown","flew"]
    Output: "fl"

    Example 2:
    Input: strs = ["apple","night","cat"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
 */

const findPrefix = (arr) => {
    const element = arr[0];
    if (!element || arr.length === 1) return element || '';

    let i = 0;
    // Iterating all the array element have the matching char at index i
    while (element[i] && arr.every(item => item[i] === element[i])) {
        i++;
    }
    const result = element.substr(0, i);
    return result;
}

const arr = ['flowing', 'flown', 'flew'];
// const arr = ['apple', 'night', 'cat'];
const result = findPrefix(arr);
console.log('Result: ', result);
