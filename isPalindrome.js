function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

const isPalindrome2 = str => str === str.split('').reverse().join('');

console.log(isPalindrome('test'));
console.log(isPalindrome('teset'));