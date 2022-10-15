/**
 2.Find whether these two string are anagram of each other or not
    Input: str1: ‘cat’ str2:’act’
    Output: isanAnagram

    Input: str1: ‘tap’ str2:’pet’
    Output: isnotanAnagram
 */

const checkAnagram = (str1, str2) => {
    if (str1.length !== str2.length) return 'isnotanAnagram';

    /**
     * First spliting the string: ['c','a','t']
     * Second sorting: ['a','c','t']
     * Joining: 'act'
     */
    const sortedStr1 = str1.split('').sort().join('')
    const sortedStr2 = str2.split('').sort().join('')
    const result = (sortedStr1 === sortedStr2) ? 'isanAnagram' : 'isnotanAnagram';
    return result;
}

const str1 = 'cat';
const str2 = 'act';
// const str1 = 'tap';
// const str2 = 'pet';

const result = checkAnagram(str1, str2);
console.log('Result: ', result);
