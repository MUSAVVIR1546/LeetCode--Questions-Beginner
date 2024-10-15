// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.


//1
// function isPalindrome(int) {
//     let reverse = int.toString().split('').reverse().join('');
//     return parseInt(reverse) === int;
// }

//2
function isPalindrome(int) {
    let reverse = '';
    let str = int.toString();
    for (let i = str.length - 1; i >= 0; i--) {
        let num = str[i];
        reverse += num
    }
    return parseInt(reverse) === int;
}
console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.


// Constraints:

// -231 <= x <= 231 - 1


// Follow up: Could you solve it without converting the integer to a string?