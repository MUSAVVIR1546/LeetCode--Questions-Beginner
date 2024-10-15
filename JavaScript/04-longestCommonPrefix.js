// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



//1
// function longestCommonPrefix(strs) {
//     let commonPrefix = '';
//     let first = strs[0].split('');

//     for (let i = 1; i < strs.length; i++) {

//         let word = strs[i];

//         for (let j = 0; j < word.length; j++) {
//             first.every(char => {
//                 if (char === word[j]) {
//                     commonPrefix += word[j];
//                 }
//             })
//         }
//     }
//     return commonPrefix;
// }

//2



// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.